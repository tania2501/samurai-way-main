import React from "react";
import { NavLink } from "react-router-dom";
import a from "./Navbar.module.css";
import home from './../../assets/icons/home-3-32.png'
import friend  from './../../assets/icons/group-32.png'
import message  from './../../assets/icons/message-2-32.png'
import music from './../../assets/icons/music-2-32.png'
import set from './../../assets/icons/settings-25-32.png'
import news from './../../assets/icons/newspaper-32.png'

const Navbar = () => {
  return (
    <nav className={a.navbar}>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/profile"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={home} alt="#" />
          Profile
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/dialogs"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={message} alt="#" />
          Message
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/users"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={friend} alt="#" />
          Users
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/news"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={news} alt="#" />
          News
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/music"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={music} alt="#" />
          Music
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/samurai-way-main/settings"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          <img src={set} alt="#" />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
