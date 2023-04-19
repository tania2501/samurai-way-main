import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileUserType } from './ProfileContainer';



export type ProfilePageType = {
  posts: PostType[]
  newTextValue: string
  profile: ProfileUserType
}
export type ProfilePropsType ={
  profile: ProfileUserType
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;