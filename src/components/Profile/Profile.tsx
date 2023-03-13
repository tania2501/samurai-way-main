import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { ActionsTypes } from '../../mainRedux/store-redux';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';



export type ProfilePageType = {
  posts: PostType[]
  newTextValue: string
}
export type ProfilePropsType ={
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes)=>void
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  )
}
export default Profile;