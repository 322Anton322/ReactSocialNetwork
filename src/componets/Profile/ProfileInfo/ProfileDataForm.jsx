import React from "react"
import { createField, Input, Textarea } from "./../../Common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <button>
           Save
          </button>
        </div> 
      <div>
         <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
       </div>
       <div>
         <b>Looking for a job</b>: {createField("Looking for a job:", "lookingForAJob", [], Input, {type: "checkbox"})}
       </div>
       <div>
         <b>My professional skill</b>: {createField("My professional skill", "lookingForAJobDescription", [], Textarea)}
       </div><div>
         <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
       </div>
       <div>
       <b>Contact </b>:{Object.keys(profile.contacts).map(key => {
        return <div key={key}>
            <b>{key}: {createField(key, "contacts." + key , [], Input)}</b>
        </div> 
       })}
     </div>
      
        </form>
)}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm);

export default ProfileDataFormReduxForm;

/*
<b>Contact </b>: {Object.keys(profile.contacts).map(key => {
           return <Contact key= {key} contactTitle={key} contactValue={profile.contacts[key]} />
*/