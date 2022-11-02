import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from "./../../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  /*
  componentDidMount(){
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        debugger;
        this.props.setUserProfile = Profile(response.data);
      });
  }
*/
  refreshProfile(props) {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      //userId = 25781
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwen={!this.props.match.params.userId}
        savePhoto ={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
  status: state.postsPage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
