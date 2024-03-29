import { usersAPI } from "./../api/api"
import {updateObjectInArray} from "./../utils/obgect-helpers"

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";



let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 1, 
  currentPage: 1,
  isFetching : false , 
  followingInProgress: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return {
            ...state,
            users : updateObjectInArray(state.users, action.userId, "id", {followed: true})
            /*
            users: state.users.map(u =>{
                if(u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
            */
        }
    case UNFOLLOW:
        return {
            ...state,
            users : updateObjectInArray(state.users, action.userId, "id", {followed: false})
            /*
            users: state.users.map(u =>{
                if(u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
            */
        }
    case SET_USERS:{
        return {...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {...state,
             followingInProgress: action.isFetching 
             ? [...state.followingInProgress, action.userId]
             : state.followingInProgress.filter(id => id != action.userId)
        }
    }
   
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId  });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUSersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize ) => {
    return (dispatch) =>{
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage))

    usersAPI.getUsers(currentPage,pageSize).then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUSersCount(data.totalCount));
      });
}}

export const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        let response = await apiMethod(userId)
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) =>{
        followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}}

export const unfollow = (userId) => {
    return async (dispatch) =>{
        followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}}

export default userReducer;



//followingInProgress: action.isFetching 
            // [...state.followingInProgress, action.userId]
            //: state.followingInProgress.filter(id => id != action.userId)