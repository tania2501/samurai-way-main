import { connect } from "react-redux";
import { StateType } from "../../mainRedux/store-redux";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowing,
  unfollow,
} from "../../mainRedux/users-reducer";
import { UserType } from "./Users";
import React, { Component } from "react";
import { Users } from "./Users";
import { usersAPI, usersAPIpage } from "../../dal/api";


type UsersAPIType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (page: number) => void;
  setTotalCount: (users: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  isFetching: boolean;
  toggleIsFollowing: (isFollowed: boolean, id: number) => void
  isFollowed: Array<number>
};

class UsersAPI extends Component<UsersAPIType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.setCurrentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }

  onChangePage = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    usersAPIpage.onChangeUsersPage(page, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };
  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onChange={this.onChangePage}
        isFetching={this.props.isFetching}
        isFollowed={this.props.isFollowed}
        toggleIsFollowing={this.props.toggleIsFollowing}
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

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowing
})(UsersAPI);
