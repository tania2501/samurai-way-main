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
      {props.isOwner && <button style={{backgroundColor: '#fff', border: 'none'}} onClick={props.setEdit}><img src={edit} alt="#" style={{width: '25px'}}/></button>} 
      <div className={s.name}>
        <div>Full name: {props.profile.fullName} </div>
        <div style={{ display: "flex" }}>
          Status:{" "}
          <div style={{ marginLeft: "5px" }}>
            <ProfileStatus
              status={props.status}
              changeStatus={props.changeStatus}
              isOwner={props.isOwner}
            />
          </div>
        </div>
        <div>Looking for a job: {props.profile.lookingForAJob}</div>
        <div>My skills: {props.profile.lookingForAJobDescription}</div>
      </div>
      <div className={s.social}>
        <a href={"https://" + props.profile.contacts.facebook}>
          <img
            src="https://www.clipartmax.com/png/small/13-139519_facebook-flat-flat-icon-social-icon-facebook-simgesi.png"
            alt="#"
          />
        </a>
        <a href={"https://" + (props.profile.contacts.github ? props.profile.contacts.github : 'github.com')}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="#"
          />
        </a>
        <a href={"https://" + (props.profile.contacts.instagram ? props.profile.contacts.instagram : 'instagram.com')}>
          <img
            src="https://www.clipartmax.com/png/small/4-41427_instagram-png-icon-instagram-logo-transparent.png"
            alt="#"
          />
        </a>
        <a href={"https://" + (props.profile.contacts.twitter ? props.profile.contacts.twitter : 'twitter.com')}>
          <img
            src="https://www.clipartmax.com/png/small/4-41586_twitter-clipart-logo-twitter-vector-2013.png"
            alt=""
          />
        </a>
        <a href={"https://" + (props.profile.contacts.vk ? props.profile.contacts.vk : 'vk.com')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
            alt="#"
          />
        </a>
        <a href={"https://" + (props.profile.contacts.youtube ? props.profile.contacts.youtube : 'youtube.com')}>
          <img
            src="https://www.maryville.edu/wp-content/uploads/2015/11/youtube-logo-png-3575.png"
            alt="#"
          />
        </a>
      </div>
    </div>
  );
};