import { ProfileUserType } from "../../ProfileContainer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import s from './../ProfileInfo.module.css'
import edit from './../../../../assets/icons/edit.png'

export const ProfileData = (props: {
  profile: ProfileUserType;
  status: string;
  changeStatus: (status: string | undefined) => void;
  isOwner: boolean;
  setEdit: () => void;
}) => {
  return (
    <div> 
      <div className={s.name}>
        <div>{props.profile.fullName} {props.isOwner && <button style={{backgroundColor: '#fff', border: 'none'}} onClick={props.setEdit}><img src={edit} alt="#" style={{width: '25px'}}/></button>}</div>
        <div style={{ display: "flex", alignItems: 'center' }}>
          <div style={{ marginLeft: "5px" }}>
            <ProfileStatus
              status={props.status}
              changeStatus={props.changeStatus}
              isOwner={props.isOwner}
            />
          </div>
        </div>
        <div><span> Looking for a job: </span>{props.profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div>{props.profile.lookingForAJobDescription ? <span>My skills: {props.profile.lookingForAJobDescription}</span> : null}</div>
      </div>
      <div className={s.social}>
        <a href={"https://" + props.profile.contacts.facebook}>
          {props.profile.contacts.facebook ? <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png"
            alt="#"
          /> : null}
        </a>
        <a href={"https://" + (props.profile.contacts.github ? props.profile.contacts.github : 'github.com')}>
        {props.profile.contacts.github ?  <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="#"
          /> : null}
        </a>
        <a href={"https://" + (props.profile.contacts.instagram ? props.profile.contacts.instagram : 'instagram.com')}>
        {props.profile.contacts.instagram ? <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            alt="#"
          /> : null}
        </a>
        <a href={"https://" + (props.profile.contacts.twitter ? props.profile.contacts.twitter : 'twitter.com')}>
          {props.profile.contacts.twitter ? <img
            src="https://www.clipartmax.com/png/small/4-41586_twitter-clipart-logo-twitter-vector-2013.png"
            alt=""
          /> : null}
        </a>
        <a href={"https://" + (props.profile.contacts.vk ? props.profile.contacts.vk : 'vk.com')}>
          {props.profile.contacts.vk ? <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
            alt="#"
          /> : null}  
        </a>
        <a href={"https://" + (props.profile.contacts.youtube ? props.profile.contacts.youtube : 'youtube.com')}>
          {props.profile.contacts.youtube ? <img
            src="https://www.maryville.edu/wp-content/uploads/2015/11/youtube-logo-png-3575.png"
            alt="#"
          /> : null}
        </a>
      </div>
    </div>
  );
};