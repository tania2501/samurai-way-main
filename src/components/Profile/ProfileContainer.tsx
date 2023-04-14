import { connect } from "react-redux";
import { Component } from "react";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";
import { profileAPI } from "../../dal/api";


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
    let userId = Number(this.props.params.userId)
    if (!userId) {
      userId = 28525
    }
    profileAPI.getProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
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
