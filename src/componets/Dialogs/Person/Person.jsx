import React from "react";
import personModule from "./Person.module.css";
import { NavLink } from "react-router-dom";

const Person = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={personModule.personItems}>
      <div className={personModule.dialog}>
        <NavLink to= {path}>{props.name} </NavLink>
      </div>
      <div className={personModule.dialog}></div>
    </div>
  );
};

export default Person;
