import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  follow,
  unfollow,
  toggleIsFollowingProgress,
  getUsers,
} from "../../Redux/users-reducer";
import Users from "./Users";
import loder from "./../assets/svg/Blinking squares.gif";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount,getUser } from "../../Redux/users-selectores";

class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.PageSize);
  }
  onPageChenged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.PageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <img src={loder} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
/*
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
*/
export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
}))(UsersConteiner)

/*
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUSersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingActionCreator(isFetching));
    } 
  };
};
*/
