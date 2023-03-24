import React from "react";
import { NavLink } from "react-router-dom";
import a from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={a.navbar}>
      <div className={a.item}>
        <NavLink to="/Profile" className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>Profile</NavLink>
      </div>
      <div className={a.item}>
        <NavLink to="/Dialogs"className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>Message</NavLink>
      </div>
      <div className={a.item}>
        <NavLink to="/Users"className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>Users</NavLink>
      </div>
      <div className={a.item}>
        <NavLink to="/News" className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>News</NavLink>
      </div>
      <div className={a.item}>
        <NavLink to="/Music" className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>Music</NavLink>
      </div>
      <div className={a.item}>
        <NavLink to="/Setting" className={({ isActive }) =>
      isActive ? a.activeLink : undefined
    }>Settings</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
