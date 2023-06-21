import React, { ChangeEvent, useState } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileUserType } from "../ProfileContainer";
import { Preloader } from "../../common/Preloader";
import ava from "./../../../assets/img/user.jpg";
import logo from "./../../../assets/icons/pictures.png";
import { ProfileData } from "./ProfileData/ProfileData";
import { ProfileDataForm } from "./ProfileDataForm/ProfileDataForm";

export const ProfileInfo = (props: {
  profile: ProfileUserType;
  status: string;
  changeStatus: (status: string | undefined) => void;
  isOwner: boolean;
  updatePhoto: (file: File) => void;
  updateProfileData: (data: ProfileUserType) => void
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile.photos) {
    return <Preloader isFetching={true} />;
  }
  const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList;
    if (selectedFiles) {
      props.updatePhoto?.(selectedFiles[0]);
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
                <img src={logo} alt="#" />
              </label>
              <input id="file-input" type="file" onChange={onChangePhoto} />
            </div>
          )}
        </div>
        <div className={s.info}>
          {!editMode ? <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            setEdit={() => setEditMode(true)}
            status={props.status}
            changeStatus={props.changeStatus}
          />
        : <ProfileDataForm updateProfileData={props.updateProfileData} setEdit={() => setEditMode(false)}/>
        }   
        </div>
      </div>
    </div>
  );
};
