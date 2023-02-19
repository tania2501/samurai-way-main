import React from "react";
import s from './../Dialogs.module.css';
import { MessageType } from "../../../App";


export const DialogMessage = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

