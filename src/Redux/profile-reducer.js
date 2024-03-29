import { act } from "react-test-renderer";
import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

let initialState = {
  postData: [
    { id: 1, massage: "Hello my brother", likeCount: "12" },
    { id: 2, massage: "You like me?", likeCount: "16" },
  ],
  profile: null,
  status: "h1",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        massage: action.newPostText,
        likeCount: "0",
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case DELETE_POST: 
      return {...state, postData: state.postData.filter(p => p.id != action.postId)}
    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
        return { ...state, profile:{...state.profile, photos: action.photos} };
    default:
      return state;
  }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type:DELETE_POST , postId})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
};
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
};
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
};
};


export default profileReducer;
