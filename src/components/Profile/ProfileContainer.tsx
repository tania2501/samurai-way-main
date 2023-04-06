import { connect } from "react-redux";
import { Component } from "react";
import { PostType } from "../../App";
import { ActionsTypes, StateType } from "../../mainRedux/store-redux";
import Profile, { ProfilePageType } from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../mainRedux/profile-reducer";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";


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
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};
type PathParamsType = {
  userId: number
}
export type OwnProfileAPItype = MapDispatchPropsType & MapStateProfile
type MapStateProfile = {
  profile: ProfileUserType
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileUserType) => void;
}
type ProfileAPItype = RouteComponentProps<PathParamsType> & OwnProfileAPItype;

class ProfileAPI extends Component<ProfileAPItype> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <Profile
        setUserProfile={this.props.setUserProfile}
        profile={this.props.profile}
      />
    );
  }
}
let mapStateToProps = (state: StateType): MapStateProfile => {
  return {
    profile: state.profilePage.profile,
  };
};
let WithRouteComponent = withRouter(ProfileAPI)
export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  WithRouteComponent
);
