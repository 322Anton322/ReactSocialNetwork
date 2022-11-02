import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "./../assets/images/user-management.jpg";
import { NavLink } from "react-router-dom";


let User = ({user, followingInProgress, follow, unfollow}) => {
  return (
    <div>
      <span className={styles.item}>
        <NavLink to={"/profile/" + user.id}>
          <img src={user.photos.small != null ? user.photos.small : UserPhoto} />
        </NavLink>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;























