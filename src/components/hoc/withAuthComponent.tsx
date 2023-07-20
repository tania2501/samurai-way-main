import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { StateType } from "../../mainRedux/store-redux"


let mapStateToProps = (state: StateType) => {
  return {
    auth: state.auth.isAuth
  }
}
export function WithAuthComponent<T>(Component: React.FC<T>) {
  const RedirectComponent = (props: ReturnType<typeof mapStateToProps>) => {
      const {auth, ...restProps} = props;
      if (!auth) return <Navigate to='/samurai-way-main/login'/>
      return <Component {...restProps as T & {}}/>
    
  }
  return connect(mapStateToProps)(RedirectComponent)

}