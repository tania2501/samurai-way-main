import React from "react";
import s from './ProfileInfo.module.css'
import fon from './fon.jpg'

export const ProfileInfo = () => {
  return (
    <div>
      <div className={s.image}>
        <img src={fon}/>
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};
