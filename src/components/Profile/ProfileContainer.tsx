import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import {
  changeStatus,
  getProfile,
  getStatus,
  updatePhoto,
  updateProfileData,
} from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";
import { WithAuthComponent } from "../hoc/withAuthComponent";
import { compose } from "redux";
import React from "react";
import { Navigate } from "react-router-dom";

export type ContactsType = {
  facebook: string;
  website: string | null;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string | null;
};
export type ProfileUserType = {
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  AboutMe?: string
  userId?: number;
  photos?: {
    small: string | undefined;
    large: string | undefined;
  };
};

export type OwnProfileAPItype = MapDispatchPropsType & MapStateProfile;
type MapStateProfile = {
  profile: ProfileUserType;
  status: string;
  id: number;
};
type MapDispatchPropsType = {
  getProfile: (id: number) => void;
  getStatus: (id: number) => void;
  changeStatus: (status: string | undefined) => void;
  updatePhoto: (file: File) => void
  updateProfileData: (data: ProfileUserType) => void
};
type ProfileAPItype = WithRouterProps & OwnProfileAPItype;

class ProfileAPI extends React.Component<ProfileAPItype> {
  refreshProfile() {
    let userId = Number(this.props.params.userId);
    if (!userId) {
      userId = this.props.id;
      if(!userId) <Navigate to={'/login'}/>
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount(): void {
    this.refreshProfile()
  }
  componentDidUpdate(
    prevProps: Readonly<ProfileAPItype>
  ): void {
    if(this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        changeStatus={this.props.changeStatus}
        updatePhoto={this.props.updatePhoto}
        updateProfileData={this.props.updateProfileData}
      />
    );
  }
}

let mapStateToProps = (state: StateType): MapStateProfile => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
  };
};

export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, changeStatus, updatePhoto, updateProfileData }),
  WithAuthComponent,
  withRouter
)(ProfileAPI);
