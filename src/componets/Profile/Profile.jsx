import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import profileModule from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData}/>
    </div>
  );
};
export default Profile;
