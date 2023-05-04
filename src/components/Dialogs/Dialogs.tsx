import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogMessage } from "./Message/Message";
import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { AddForm } from "../form/AddForm";

export type DialogsPropsType ={
  dialogs: DialogType[]
  messages: MessageType[]
  changeMessage: (text: string)=>void
  addMessage: ()=> void
  newMessage: string
}
export const Dialogs = (props: DialogsPropsType) => {
  let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

  let messagesElement = props.messages.map(message => <DialogMessage message={message.message} id={message.id} key={message.id}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement} 
        <AddForm value={props.newMessage} onChange={props.changeMessage} onClick={props.addMessage} title={'Send message'}/>
      </div>
    </div>
  );
  
}