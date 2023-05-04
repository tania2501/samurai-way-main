import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";
import { AddForm } from "../../form/AddForm";

type PostPropsType = {
  posts: PostType[]
  updateTextValue: (text: string)=>void
  addPost: ()=>void
  newTextValue: string
}

const MyPosts = (props: PostPropsType) => {
  const postsElement = props.posts.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>);
  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <AddForm title="Add post" value={props.newTextValue} onChange={props.updateTextValue} onClick={props.addPost}/>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
