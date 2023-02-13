import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props) => {
  let path = '/dialog/' + props.id;
  return (
    <div>
      <NavLink to={path} className={({ isActive }) => isActive ? s.active : s.dialog}>{props.name}</NavLink> 
    </div>
  )
};
const DialogMessage = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}
export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name='Anna' id='1'/>
        <DialogItem name='Julia' id='2'/>
        <DialogItem name='Olga' id='3'/>
        <DialogItem name='Nina' id='4'/>
        <DialogItem name='Victoria' id='5'/>
      </div>
      <div className={s.messages}>
        <DialogMessage message='Hi'/>  
        <DialogMessage message='Hello'/> 
        <DialogMessage message='How are you?'/> 
        <DialogMessage message='Can i help you?'/> 
        <DialogMessage message='What are you doing now?'/>      
      </div>
    </div>
  );
  
}