import React from "react";
import logo from "./../../assets/icons/logo.png";
import s from "./Header.module.css";
import logout from '../../assets/icons/logout-32.png'
import { NavLink } from "react-router-dom";

type HeaderType = {
  auth: boolean;
  login: string;
  logOutUser: ()=>void
};
export const Header = (props: HeaderType) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="#" />
          <span> OnLine</span>
        </div>
        <div className={s.loginBlock}>
          {props.auth ? <div className={s.login}><span>{props.login}</span><img src={logout} alt="#" onClick={props.logOutUser}/></div> : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};
