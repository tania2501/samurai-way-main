import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import {
  changeStatus,
  getProfile,
  getStatus,
} from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";
import { WithAuthComponent } from "../hoc/withAuthComponent";
import { compose } from "redux";
import React from "react";

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
  userId: number;
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
};

export type OwnProfileAPItype = MapDispatchPropsType & MapStateProfile;
type MapStateProfile = {
  profile: ProfileUserType;
  status: string 
};
type MapDispatchPropsType = {
  getProfile: (id: number) => void;
  getStatus: (id: number) => void;
  changeStatus: (status: string | undefined) => void;
};
type ProfileAPItype = WithRouterProps & OwnProfileAPItype;

class ProfileAPI extends React.Component<ProfileAPItype> {
  componentDidMount(): void {
    let userId = Number(this.props.params.userId);
    if (!userId) userId = 28525;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        changeStatus={this.props.changeStatus}
      />
    );
  }
}

let mapStateToProps = (state: StateType): MapStateProfile => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, changeStatus }),
  WithAuthComponent,
  withRouter
)(ProfileAPI);
