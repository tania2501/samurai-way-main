import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'

const Profile = ()=> {
  return (
    <div className={c.content}>
      <div>
        <img src="https://oir.mobi/uploads/posts/2021-03/1616525300_1-p-krutoi-fon-1.jpg" alt="" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  )
}
export default Profile;