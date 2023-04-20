import { connect } from "react-redux";
import { Component } from "react";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import { getProfile} from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";
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
  auth: boolean
}
type MapDispatchPropsType = {
  getProfile: (id: number) => void
}
type ProfileAPItype = WithRouterProps & OwnProfileAPItype

class ProfileAPI extends Component<ProfileAPItype> {
  componentDidMount() {
    let userId = Number(this.props.params.userId)
    if (!userId) {
      userId = 28525
    }
    this.props.getProfile(userId)
  }
  render() {
    if (!this.props.auth) return <Navigate to='/login'/>
    return (
      <Profile
        profile={this.props.profile}
      />
    );
  }
}
let mapStateToProps = (state: StateType): MapStateProfile => {
  return {
    profile: state.profilePage.profile,
    auth: state.auth.isAuth
  };
};

export const ProfileContainer = connect(mapStateToProps, { getProfile })(
  withRouter(ProfileAPI)
);
