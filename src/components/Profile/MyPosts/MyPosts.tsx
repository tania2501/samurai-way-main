import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";

type PostPropsType = {
  postItem: PostType[]
  addUser: (text: any)=>void
}

const MyPosts = (props: PostPropsType) => {
 
  let postsElement = props.postItem.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>);

  let newText = React.createRef<HTMLTextAreaElement>();
 
  let addPost = () => {
     let newPost = newText.current?.value
     props.addUser(newPost)
  }

  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea ref={newText}></textarea></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
