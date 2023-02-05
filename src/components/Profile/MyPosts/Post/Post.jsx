import React from "react";
import s from "./Post.module.css";
import ava from "./Photo.png";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src={ava} alt="" />
        Post 1
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
