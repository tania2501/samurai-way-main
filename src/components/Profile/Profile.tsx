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
  isOwner: boolean
  updatePhoto: (file: File) => void
  updateProfileData: (data: ProfileUserType) => void
}

const Profile = (props: ProfilePropsType)=> {
  return (
    <div>
      <ProfileInfo updateProfileData={props.updateProfileData} updatePhoto={props.updatePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} changeStatus={props.changeStatus}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;