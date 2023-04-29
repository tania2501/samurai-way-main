import React from "react";
import { NavLink } from "react-router-dom";
import a from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={a.navbar}>
      <div className={a.item}>
        <NavLink
          to="/profile/:userId"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          Message
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          Users
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={a.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? a.activeLink : undefined)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
