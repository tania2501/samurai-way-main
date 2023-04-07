import { connect } from "react-redux";
import { Component } from "react";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";

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

export type OwnProfileAPItype = MapDispatchPropsType & MapStateProfile
type MapStateProfile = {
  profile: ProfileUserType
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileUserType) => void;
}
type ProfileAPItype = WithRouterProps & OwnProfileAPItype

class ProfileAPI extends Component<ProfileAPItype> {
  componentDidMount() {
    let userId = this.props.params.userId
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

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileAPI)
);
