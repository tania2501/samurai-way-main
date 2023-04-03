
import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../mainRedux/store-redux";
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../mainRedux/users-reducer";
import {  UserType } from "./UsersC";
import { Users } from "./UsersC";


let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (page: number) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalCount: (users: number) => {
      dispatch(setTotalCountAC(users))
    }
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)