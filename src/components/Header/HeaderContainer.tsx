import React from "react";
import { Header } from "./Header";
import { StateType } from "../../mainRedux/store-redux";
import { connect } from "react-redux";
import {
  AutorizationType,
  setAuthUserData,
} from "../../mainRedux/login-reducer";
import { authAPI } from "../../dal/api";

type MapStateLogin = {
  auth: boolean;
  login: string;
};
type MapDispatchPropsType = {
  setAuthUserData: (data: AutorizationType) => void;
};

type MainHeaderType = MapStateLogin & MapDispatchPropsType;
class HeaderContainer extends React.Component<MainHeaderType> {
  componentDidMount() {
    authAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state: StateType): MapStateLogin => {
  return {
    auth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
