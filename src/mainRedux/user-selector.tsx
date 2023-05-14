import { StateType } from "./store-redux"

export const getUser = (state: StateType) => {
  return state.usersPage.users
}
export const getPageSize = (state: StateType) => {
  return state.usersPage.pageSize
}
export const getUserTotalCount = (state: StateType) => {
  return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: StateType) => {
  return state.usersPage.currentPage
}
export const getIsFetching = (state: StateType) => {
  return state.usersPage.isFetching
}
export const getIsFollowed = (state: StateType) => {
  return state.usersPage.isFollowed
}