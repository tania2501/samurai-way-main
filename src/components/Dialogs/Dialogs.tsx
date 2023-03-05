import React, { ChangeEvent } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogMessage } from "./Message/Message";
import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { ActionsTypes, addMessageAC, newMessageAC } from "../../redux/state";

type DialogsPropsType ={
  dialogPage: {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
  }
  addMessage: (action: ActionsTypes)=>void
  updateMessage: (action: ActionsTypes)=>void
}
export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElement = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
  let messagesElement = props.dialogPage.messages.map(message => <DialogMessage message={message.message} id={message.id} key={message.id}/>);

  const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateMessage(newMessageAC(e.currentTarget.value))
  }
  const addNewMessage = () => {
    props.addMessage(addMessageAC())
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement} 
        <div><textarea value={props.dialogPage.newMessage} onChange={changeMessage}></textarea></div>
        <div><button onClick={addNewMessage}>Send</button></div>    
      </div>
    </div>
  );
  
}