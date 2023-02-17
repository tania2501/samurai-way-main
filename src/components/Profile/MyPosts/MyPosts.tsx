import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {
  const postsData = [
    {id: 1, text: 'how are you now?', likesCount: 10},
    {id: 1, text: 'happy day', likesCount: 12},
    {id: 1, text: 'are you serious???', likesCount: 14}
  ]
  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        <Post message={'how are you now?'} like={23}/>
        <Post message={'happy day'} like={3}/>
      </div>
    </div>
  );
};
export default MyPosts;
