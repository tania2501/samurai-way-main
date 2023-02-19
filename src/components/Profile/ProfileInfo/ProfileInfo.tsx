import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div className={s.image}>
        <img
          src="https://oir.mobi/uploads/posts/2021-03/1616525300_1-p-krutoi-fon-1.jpg"
          alt=""
        />
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};
