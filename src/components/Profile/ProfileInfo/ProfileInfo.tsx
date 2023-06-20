import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileUserType } from "../ProfileContainer";
import { Preloader } from "../../common/Preloader";
import ava from "./../../../assets/img/user.jpg";
import { ProfileStatus } from "./ProfileStatus";
import logo from './../../../assets/icons/pictures.png'

export const ProfileInfo = (props: {
  profile: ProfileUserType;
  status: string;
  changeStatus: (status: string | undefined) => void;
  isOwner: boolean;
  updatePhoto: (file: File) => void;
}) => {
  if (!props.profile.photos) {
    return <Preloader isFetching={true} />;
  }
  const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList;
    if (selectedFiles) {
      props.updatePhoto(selectedFiles[0]);
    }
  };
  return (
    <div>
      <div className={s.description}>
        <div className={s.ava}>
          <img
            src={props.profile.photos.large ? props.profile.photos.large : ava}
            alt="#"
          />
          {props.isOwner && (
            <div className={s.image}>
              <label htmlFor="file-input">
                <img src={logo} />
              </label>
              <input id="file-input" type="file" onChange={onChangePhoto} />
            </div>
          )}
        </div>
        <div className={s.info}>
          <div className={s.name}>
            <div> {props.profile.fullName} </div>
            <ProfileStatus
              status={props.status}
              changeStatus={props.changeStatus}
            />
          </div>
          <div className={s.social}>
            <a href={"https://" + props.profile.contacts.facebook}>
              <img
                src="https://www.clipartmax.com/png/small/13-139519_facebook-flat-flat-icon-social-icon-facebook-simgesi.png"
                alt="#"
              />
            </a>
            <a href={"https://" + props.profile.contacts.github}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="#"
              />
            </a>
            <a href={"https://" + props.profile.contacts.instagram}>
              <img
                src="https://www.clipartmax.com/png/small/4-41427_instagram-png-icon-instagram-logo-transparent.png"
                alt="#"
              />
            </a>
            <a href={"https://" + props.profile.contacts.twitter}>
              <img
                src="https://www.clipartmax.com/png/small/4-41586_twitter-clipart-logo-twitter-vector-2013.png"
                alt=""
              />
            </a>
            <a href={"https://" + props.profile.contacts.vk}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
                alt="#"
              />
            </a>
            <a href={"https://" + props.profile.contacts.youtube}>
              <img
                src="https://www.maryville.edu/wp-content/uploads/2015/11/youtube-logo-png-3575.png"
                alt="#"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
