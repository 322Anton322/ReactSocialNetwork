import React from "react"
import { Field } from "redux-form";
import style from "./FormsControle.module.css"

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControle + " " + (hasError ? style.error: "")}>
            <div>
            <textarea {...input} {...props}/>
            </div>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControle + " " + (hasError ? style.error: "")}>
            <div>
            <input {...input} {...props}/>
            </div>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const createField = (placeholder, name, validate,component, props = {}, text = "") => ( 
    <div> 
        <Field placeholder={placeholder} name={name} validate={validate} component={component}
        {...props} /> {text}
    </div>
)