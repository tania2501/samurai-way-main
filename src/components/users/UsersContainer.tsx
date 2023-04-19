import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import {
  changeUsersPage,
  follow,
  followUser,
  getUsers,
  setCurrentPage,
  toggleIsFollowing,
  unFollowUser,
  unfollow,
} from "../../mainRedux/users-reducer";
import { UserType } from "./Users";
import React, { Component } from "react";
import { Users } from "./Users";


type UsersAPIType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (page: number) => void;
  isFetching: boolean;
  toggleIsFollowing: (isFollowed: boolean, id: number) => void
  isFollowed: Array<number>
  getUsers: (setCurrentPage: (page: number) => void, pageSize: number) => void
  changeUsersPage: (page: number, pageSiaze: number)=>void
  followUser: (id: number)=>void
  unFollowUser: (id: number) => void
};

class UsersAPI extends Component<UsersAPIType> {
  componentDidMount(): void {
    this.props.getUsers(this.props.setCurrentPage, this.props.pageSize)
  }

  onChangePage = (page: number) => {
    this.props.changeUsersPage(page, this.props.pageSize)
  };
  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onChange={this.onChangePage}
        isFetching={this.props.isFetching}
        isFollowed={this.props.isFollowed}
        followUser={this.props.followUser}
        unfollowUser={this.props.unFollowUser}
      />
    );
  }
}

let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowed: state.usersPage.isFollowed
  };
};

export const UsersContainer = connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers, changeUsersPage, followUser, unFollowUser })(UsersAPI);
