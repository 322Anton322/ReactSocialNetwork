import React, { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
          setStatus(e.currentTarget.value)
        
    }
  return (
    <div>
      {!editMode && (
        <div>
         <b>Status: </b> 
         <span onDoubleClick={activeEditMode}>
            {props.status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode} value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
