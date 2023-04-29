import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import Profile from "./Profile";
import { getProfile } from "../../mainRedux/profile-reducer";
import { WithRouterProps, withRouter } from "./WithRouter";
import { WithAuthComponent } from "../hoc/withAuthComponent";
import { compose } from "redux";

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

export type OwnProfileAPItype = MapDispatchPropsType & MapStateProfile;
type MapStateProfile = {
  profile: ProfileUserType;
};
type MapDispatchPropsType = {
  getProfile: (id: number) => void;
};
type ProfileAPItype = WithRouterProps & OwnProfileAPItype;

const ProfileAPI = (props: ProfileAPItype) => {
  let userId = Number(props.params.userId);
  if (!userId) {
    userId = 28525;
  }
  props.getProfile(userId);

  return <Profile profile={props.profile} />;
};
const ProfileRouter = withRouter(ProfileAPI)
const AuthRedirectComponent = WithAuthComponent(ProfileRouter);

let mapStateToProps = (state: StateType): MapStateProfile => {
  return {
    profile: state.profilePage.profile,
  };
};


export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  WithAuthComponent
)(ProfileAPI)