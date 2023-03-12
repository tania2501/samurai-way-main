import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { ActionsTypes } from '../../mainRedux/store-redux';



export type ProfilePageType = {
  posts: PostType[]
  newTextValue: string
}
export type ProfilePropsType ={
  profilePage: ProfilePageType
  addUser: (action: ActionsTypes)=>void
  updateText: (action: ActionsTypes)=>void
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