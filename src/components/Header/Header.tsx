import React from "react";
import logo from "./logo.png";
import b from "./Header.module.css";

export const Header = () => {
  return (
    <header className={b.header}>
    <div className={b.logo}>
      <img src={logo} alt='#'/>
      <span>OnLine</span>
    </div>
      
    </header>
  );
};

export default Header;
