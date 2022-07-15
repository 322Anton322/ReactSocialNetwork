import React from "react";
import myPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
 
  let postElements = props.postData.map((p) => <Post massage={p.massage} likeCount={p.likeCount} />)
  return (
    <div className={myPostsModule.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={myPostsModule.posts}>New post</div>
      {postElements}
    </div>
  );
};
export default MyPosts;
