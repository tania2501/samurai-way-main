import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { StateType } from "../../mainRedux/store-redux";
import { connect } from "react-redux";
import { AutorizationType, setAuthUserData } from "../../mainRedux/login-reducer";

type MapStateLogin = {
  auth: boolean
  login: string
}
type MapDispatchPropsType = {
  setAuthUserData: (data: AutorizationType) => void;
}

type MainHeaderType = MapStateLogin & MapDispatchPropsType
class HeaderContainer extends React.Component<MainHeaderType> {
  componentDidMount() {
    debugger
    axios
       .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
       })
       .then((response) => {
          if (response.data.resultCode === 0) {
            this.props.setAuthUserData(response.data.data)
          }
       });
  }
  render() {
    return <Header {...this.props}/> 
  }
}
let mapStateToProps = (state: StateType): MapStateLogin => {
  return {
    auth: state.auth.isAuth,
    login: state.auth.login
  }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
