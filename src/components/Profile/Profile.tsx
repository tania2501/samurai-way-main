import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { ActionsTypes } from '../../redux/state';

export type ProfilePropsType ={
  profilePage: {
    posts: PostType[]
    newTextValue: string
  }
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