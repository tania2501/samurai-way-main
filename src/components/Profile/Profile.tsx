import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { ActionsTypes } from '../../mainRedux/store-redux';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { OwnProfileAPItype, ProfileUserType } from './ProfileContainer';



export type ProfilePageType = {
  posts: PostType[]
  newTextValue: string
  profile: ProfileUserType
}
export type ProfilePropsType ={
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes)=>void
}

const Profile = (props: OwnProfileAPItype)=> {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;