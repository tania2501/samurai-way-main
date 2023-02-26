import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../App";

type PostPropsType = {
  postItem: PostType[]
  textValue: string
  addUser: ()=>void
  updateText: (text: any)=>void
}

const MyPosts = (props: PostPropsType) => {
 
  const postsElement = props.postItem.map(p => <Post message={p.text} like={p.likesCount} key={p.id}/>);

  const newText = React.createRef<HTMLTextAreaElement>();
 
  const addPost = () => {
    props.addUser()
  }
  const updateText = () => {
    let newPost = newText.current?.value
    props.updateText(newPost)
  }


  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea ref={newText} value={props.textValue} onChange={updateText}/></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
