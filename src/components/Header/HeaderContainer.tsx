import React from "react";
import { Header } from "./Header";
import { StateType } from "../../mainRedux/store-redux";
import { connect } from "react-redux";
import { logOutUser } from "../../mainRedux/login-reducer";

type MapStateLogin = {
  auth: boolean;
  login: string;
};
type MapDispatchPropsType = {
  logOutUser: ()=>void
};

type MainHeaderType = MapStateLogin & MapDispatchPropsType;
class HeaderContainer extends React.Component<MainHeaderType> {
  
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
export default connect(mapStateToProps, { logOutUser })(HeaderContainer);
