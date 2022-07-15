import React from "react";
import dialogsModule from "./Dialogs.module.css";
import Person from "./Person/Person";
import Massages from "./Massages/Massages";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  let personElements = props.state.personData.map((p) => <Person id={p.id} name={p.name}  />)
  let massageElements = props.state.massageData.map((m) => <Massages massage={m.massage} />);

  return (
    <div className={dialogsModule.dialogs}>
      <div>
        {personElements}
      </div>
      <div>{massageElements}</div>
    </div>
  );
};
export default Dialogs;
