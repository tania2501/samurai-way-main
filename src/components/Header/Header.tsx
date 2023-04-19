import React from "react";
import logo from "./logo.png";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderType = {
  auth: boolean
  login: string
}
export const Header = (props: HeaderType) => {
  return (
    <header className={s.header}>
      
        <div className={s.logo}>
          <img src={logo} alt="#" />
        <span> OnLine</span>
        </div>
        <div className={s.loginBlock}>
          { props.auth ? props.login
          : <NavLink to="/login">Login</NavLink>} 
        </div>
     
    </header>
  );
};
