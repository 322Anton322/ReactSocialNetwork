import React from "react"; 
import Paginator from "../Common/Pagenator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChenged, totalUsersCount, pageSize, unfollow, follow, users, ...props}) => {
  return <div>
      <Paginator currentPage={currentPage} onPageChenged={onPageChenged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
      {users.map((u) => (<User key={u.id} followingInProgress={props.followingInProgress} user={u} unfollow={ unfollow} follow={follow}/>))}
    </div>
}
export default Users;

