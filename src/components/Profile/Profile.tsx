import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';

export type ProfilePropsType ={
  profilePage: {
    posts: PostType[]
    
  }
  addUser: (text: string)=>void
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postItem={props.profilePage.posts} addUser={props.addUser}/>
    </div>
  )
}
export default Profile;