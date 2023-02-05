import React from "react";
import logo  from './logo.png'
import b from'./Header.module.css'


export const Header = ()=> {
  return <header className={b.header}>
    <img src={logo} />
  </header>
}

export default Header;