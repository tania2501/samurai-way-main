import React, { ChangeEvent } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogMessage } from "./Message/Message";
import { DialogType } from "../../App";
import { MessageType } from "../../App";

type DialogsPropsType ={
  dialogs: DialogType[]
  message: MessageType[]
  changeMessage: (text: string)=>void
  addMessage: ()=> void
  value: string
}
export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

  let messagesElement = props.message.map(message => <DialogMessage message={message.message} id={message.id} key={message.id}/>);

  const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeMessage(e.currentTarget.value)
  }
  const addNewMessage = () => {
    props.addMessage();
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement} 
        <div><textarea value={props.value} onChange={changeMessage}></textarea></div>
        <div><button onClick={addNewMessage}>Send</button></div>    
      </div>
    </div>
  );
  
}