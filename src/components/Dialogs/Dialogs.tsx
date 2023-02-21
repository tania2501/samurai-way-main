import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogMessage } from "./Message/Message";
import { DialogType } from "../../App";
import { MessageType } from "../../App";

type DialogsPropsType ={
  dialogPage: {
    dialogs: DialogType[]
    messages: MessageType[]
  }
}
export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElement = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
  let messagesElement = props.dialogPage.messages.map(message => <DialogMessage message={message.message} id={message.id} key={message.id}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}      
      </div>
    </div>
  );
  
}