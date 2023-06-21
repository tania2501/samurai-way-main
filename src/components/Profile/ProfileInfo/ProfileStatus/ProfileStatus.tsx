import React, { ChangeEvent, useState } from "react";
import s from "./../ProfileInfo.module.css";

export const ProfileStatus = (props: {
  status: string;
  changeStatus: (status: string | undefined) => void;
  isOwner: boolean;
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
  };
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.status}>
      {editMode ? (
        <input
          data-testid="input"
          value={status}
          onChange={changeStatus}
          onBlur={disebleMode}
          autoFocus
        />
      ) : props.isOwner ? (
        <span onDoubleClick={activateMode} data-testid="span">
          {props.status ? props.status : "Add status"}
        </span>
      ) : (
        <span data-testid="span">
          {props.status ? props.status : "Add status"}
        </span>
      )}
    </div>
  );
};
