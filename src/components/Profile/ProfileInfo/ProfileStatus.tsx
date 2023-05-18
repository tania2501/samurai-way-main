import React, {
  ChangeEvent,
  useState,
} from "react";
import s from "./ProfileInfo.module.css";

export const ProfileStatus = (props: {
  status: string;
  changeStatus: (status: string | undefined) => void;
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<undefined | string>(props.status);
 
  const activateMode = () => {
    setEditMode(true);
    if (props.status !== status) setStatus(props.status);
  };
  const disebleMode = () => {
    setEditMode(false);
    props.changeStatus(status);
  }
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
    }
  
  return (
    <div className={s.status}>
      {editMode ? (
        <input
          value={status}
          onChange={changeStatus}
          onBlur={disebleMode}
          autoFocus
        />
      ) : (
        <span onDoubleClick={activateMode}>
          {props.status ? props.status : "Add status"}
        </span>
      )}
    </div>
  );
};