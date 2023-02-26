import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';

export type ProfilePropsType ={
  profilePage: {
    posts: PostType[]
    newTextValue: string
  }
  addUser: ()=>void
  updateText: (text: string)=>void
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postItem={props.profilePage.posts} addUser={props.addUser} textValue={props.profilePage.newTextValue} updateText={props.updateText}/>
    </div>
  )
}
export default Profile;