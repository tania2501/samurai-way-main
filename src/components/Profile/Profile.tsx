import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../../App';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileUserType } from './ProfileContainer';



export type ProfilePageType = {
  posts: PostType[]
  newTextValue: string
  profile: ProfileUserType
  status: string
}
export type ProfilePropsType ={
  profile: ProfileUserType
  status: string 
  changeStatus: (status: string | undefined)=>void
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} changeStatus={props.changeStatus}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;