import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';
import { DialogType } from "../../../App";


export const DialogItem = (props: DialogType) => {
  let path = '/dialog/' + props.name;
  return (
    <div>
      <NavLink to={path} className={({ isActive }) => isActive ? s.active : s.dialog}>{props.name}</NavLink> 
    </div>
  )
};
