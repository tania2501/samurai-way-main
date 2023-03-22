import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";


type PostPropsType = {
  posts: PostType[]
  updateTextValue: (text: string)=>void
  addPost: ()=>void
  newTextValue: string
}

const MyPosts = (props: PostPropsType) => {
 
  const postsElement = props.posts.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>);

 
 
  const addPost = () => {
    props.addPost();
  }
  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    props.updateTextValue(text);
  }


  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea value={props.newTextValue} onChange={updateText}/></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
