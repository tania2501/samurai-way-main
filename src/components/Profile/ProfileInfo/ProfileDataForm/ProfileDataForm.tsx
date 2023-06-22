import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactsType, ProfileUserType } from "../../ProfileContainer";
import s from "./../ProfileInfo.module.css";
import save from './../../../../assets/icons/checked.png'
import cancel from './../../../../assets/icons/undo.png'

export type ProfileFormType = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  AboutMe: string
};
export const ProfileDataForm = (props: { setEdit: () => void, updateProfileData: (data: ProfileUserType) => void, profile: ProfileUserType}) => {
  const {
    register,
    handleSubmit
  } = useForm<ProfileFormType>({
    mode: "onChange", defaultValues: props.profile
  });
  const submitHandler: SubmitHandler<ProfileFormType> = (data) => {
    console.log(data);
    props.updateProfileData(data)
    props.setEdit();
  };
  return (
    <div style={{ color: "#000" }}>
      <form onSubmit={handleSubmit(submitHandler)} className={s.form}>
        <p>
          Full name: <input type="text" {...register("fullName")} />
        </p>
        <p>
          About me:
          <input type="text" {...register("AboutMe")} />
        </p>
        <p>
          Looking for a job:{" "}
          <input type="checkbox" {...register("lookingForAJob")} />
        </p>
        <p>
          My skills:{" "}
          <input type="text" {...register("lookingForAJobDescription")} />
        </p>
        <div>
          <p>My contacts:</p>
          <div className={s.contacts}>
            {" "}
            instagram: <input
              type="text"
              {...register("contacts.instagram")}
            />{" "}
            <br />
            facebook: <input
              type="text"
              {...register("contacts.facebook")}
            />{" "}
            <br />
            github: <input type="text" {...register("contacts.github")} />{" "}
            <br />
            VK: <input type="text" {...register("contacts.vk")} /> <br />
            twitter: <input
              type="text"
              {...register("contacts.twitter")}
            />{" "}
            <br />
            youtube: <input type="text" {...register("contacts.youtube")} />
            <button type="submit" style={{backgroundColor: '#fff', border: 'none'}}>
              <img src={save} alt="#" style={{width: '15px'}}/>
            </button>
            <button style={{backgroundColor: '#fff', border: 'none'}} onClick={props.setEdit}>
              <img src={cancel} alt="#" style={{width: '15px'}}/>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
