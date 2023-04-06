import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from "../../mainRedux/users-reducer";
import {  UserType } from "./Users";
import axios from "axios";
import React, { Component } from "react";
import {Users} from "./Users";

type UsersAPIType = {
  users: UserType[];
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalCount: (users: number) => void
  toggleIsFetching: (isFetching: boolean)=>void
  isFetching: boolean
};

class UsersAPI extends Component<UsersAPIType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true);
    axios
       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.setCurrentPage}&count=${this.props.pageSize}`)
       .then((response) => {
         this.props.setUsers(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
         this.props.toggleIsFetching(false);
       });
 }

  onChangePage = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.toggleIsFetching(false);
        });
  }
  render() {
   
    return <Users users={this.props.users} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow} onChange={this.onChangePage} isFetching={this.props.isFetching}/>
  }
}

let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching})(UsersAPI)