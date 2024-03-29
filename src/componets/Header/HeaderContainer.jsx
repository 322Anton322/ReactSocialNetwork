import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData, logout, getAuthUserData} from "./../../Redux/auth-reducer"
import { compose } from "redux";
import {authAPI} from "./../../api/api"
 
class HeaderContainer extends React.Component {
/*
  componentDidMount() {
    this.props.getAuthUserData()
    
  }
*/
  render() {
    return <Header {...this.props}


    />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default compose(connect(mapStateToProps,{getAuthUserData, logout}))(HeaderContainer)

