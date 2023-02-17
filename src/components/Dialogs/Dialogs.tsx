import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props: any) => {
  let path = '/dialog/' + props.id;
  return (
    <div>
      <NavLink to={path} className={({ isActive }) => isActive ? s.active : s.dialog}>{props.name}</NavLink> 
    </div>
  )
};
const DialogMessage = (props: any) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Anna'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Olga'},
    {id: 4, name: 'Nina'},
    {id: 5, name: 'Victoria'},
  ];
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Can i help you?'},
    {id: 5, message: 'What are you doing now?'},
  ];
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