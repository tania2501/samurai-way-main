
import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../mainRedux/store-redux";
import { followAC, setUsersAC, unfollowAC } from "../../mainRedux/users-reducer";
import { Users, UserType } from "./Users";


let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    }
  }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)