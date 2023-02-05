import React from "react";
import a from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={a.navbar}>
      <div className={a.item}>
        <a href="">Profile</a>
      </div>
      <div className={a.item}>
        <a href="">Message</a>
      </div>
      <div className={a.item}>
        <a href="">News</a>
      </div>
      <div className={a.item}>
        <a href="">Music</a>
      </div>
      <div className={a.item}>
        <a href="">Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
