import { connect } from "react-redux";
import { combineReducers, compose } from "redux";
import {
  addPost,
} from "../../../Redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: state.postsPage.postData,
    newPostText: state.postsPage.newPostText,
  };
};


export default compose(connect(mapStateToProps, {addPost,}),
withAuthRedirect)
(MyPosts)



























/*
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActoionCreator());
    },
  };
};
*/