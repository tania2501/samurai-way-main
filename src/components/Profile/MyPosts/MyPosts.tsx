import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";
import { ActionsTypes } from "../../../mainRedux/store-redux";
import { addPostAC, updateTextAC } from "../../../mainRedux/profile-reducer";


type PostPropsType = {
  postItem: PostType[]
  textValue: string
  addUser: (action: ActionsTypes)=>void
  updateText: (action: ActionsTypes)=>void
}

const MyPosts = (props: PostPropsType) => {
 
  const postsElement = props.postItem.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>);

 
 
  const addPost = () => {
    props.addUser(addPostAC())
  }
  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateText(updateTextAC(e.currentTarget.value))
  }


  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea value={props.textValue} onChange={updateText}/></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
