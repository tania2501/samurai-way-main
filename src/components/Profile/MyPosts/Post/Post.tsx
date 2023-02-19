import React from "react";
import s from "./Post.module.css";
import ava from "./Photo.png";

type PostType = {
  message: string
  like: number
  key: string
}

const Post = (props: PostType) => {
  return (
    <div>
      <div className={s.item}>
        <img src={ava} />
        {props.message}
        <div>
          <span>Like: {props.like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
