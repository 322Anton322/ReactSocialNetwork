import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../Common/FormsControls/FormsControle.module.css"
const LoginForm =({handleSubmit, error}) =>{
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", "email", [required], Input)}
            {createField("password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "remember my")}
            
            {error && <div className={style.formSumaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) =>{
    const onSubmit =(formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return<Navigate to={"/profile/"}/>
    }
    return(
       <div>
        <h1>
            LOGIN
        </h1>
       <LoginReduxForm onSubmit={onSubmit}/>
       </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);