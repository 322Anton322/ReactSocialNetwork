import React from "react";
import PostModule from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={PostModule.item}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
      {props.massage}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
