import React, { useState } from "react";
import logo from "./../../assets/icons/logo.png";
import s from "./Header.module.css";
import logout from "../../assets/icons/logout-32.png";
import { NavLink } from "react-router-dom";

type HeaderType = {
  auth: boolean;
  login: string;
  logOutUser: () => void;
};
export const Header = (props: HeaderType) => {
  const [menu, setMenu] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.menuBurger}>
          <nav className={s.navmenu + " " + (menu ? s.active : "")}>
            <div className={s.foto}></div>
            <div className={s.item}>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? s.activeLink : "")}
                onClick={() => setMenu(false)}
              >
                Profile
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink
                to="/dialogs"
                className={({ isActive }) =>
                  isActive ? s.activeLink : undefined
                }
                onClick={() => setMenu(false)}
              >
                Dialogs
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? s.activeLink : undefined
                }
                onClick={() => setMenu(false)}
              >
                Users
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? s.activeLink : undefined
                }
                onClick={() => setMenu(false)}
              >
                News
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive ? s.activeLink : undefined
                }
                onClick={() => setMenu(false)}
              >
                Music
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? s.activeLink : undefined
                }
                onClick={() => setMenu(false)}
              >
                Settings
              </NavLink>
            </div>
          </nav>
          <div
            className={s.hamburger + " " + (menu ? s.active : "")}
            onClick={() => setMenu(!menu)}
          >
            <span className={s.bar}></span>
            <span className={s.bar}></span>
            <span className={s.bar}></span>
          </div>
        </div>
        <div className={s.logo}>
          <img src={logo} alt="#" />
          <span> OnLine</span>
        </div>
        <div className={s.loginBlock}>
          {props.auth ? (
            <div className={s.login}>
              <span>{props.login}</span>
              <img src={logout} alt="#" onClick={props.logOutUser} />
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
