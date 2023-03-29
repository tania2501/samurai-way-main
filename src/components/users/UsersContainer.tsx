
import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../mainRedux/store-redux";
import { followAC, setUsersAC, unfollowAC } from "../../mainRedux/users-reducer";
import {  UserType } from "./UsersC";
import { Users } from "./UsersC";


let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)