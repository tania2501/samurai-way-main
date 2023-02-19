import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";

type PostPropsType = {
  postItem: PostType[]
}

const MyPosts = (props: PostPropsType) => {
  // const postsData = [
  //   {id: 1, text: 'how are you now?', likesCount: 10},
  //   {id: 1, text: 'happy day', likesCount: 12},
  //   {id: 1, text: 'are you serious???', likesCount: 14}
  // ]
  let postsElement = props.postItem.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>)
  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
