import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";
import { LoginDataType, loginUser } from "../../mainRedux/login-reducer";
import { StateType } from "../../mainRedux/store-redux";
import { Navigate } from "react-router-dom";

type LoginPropsType = {
  loginUser: (loginData: LoginDataType)=>void
  auth: boolean
  error: string
  captcha: string | null
}
const Login = (props: LoginPropsType) => {
  if(props.auth) return <Navigate to='/samurai-way-main/profile'/>
  return (
    <div>
      <h1>Login</h1>
      <LoginForm captcha={props.captcha} loginUser={props.loginUser} error={props.error}/>
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    auth: state.auth.isAuth,
    error: state.auth.error,
    captcha: state.auth.captcha
  }
}
export default connect(mapStateToProps, {loginUser})(Login)