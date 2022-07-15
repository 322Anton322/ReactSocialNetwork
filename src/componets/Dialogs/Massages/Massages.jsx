import React from "react";
import massagesModule from "./Massages.module.css";

const Massages = (props) => {
  return (
    <div className={massagesModule.massages}>
      <div className={massagesModule.massage}>{props.massage}</div>
    </div>
  );
};

export default Massages;
