import axios from "axios";
import React, { Component } from "react";
import ava from "../../assets/img/users.png";
import s from "./Users.module.css";

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
  status: null | string;
  followed: boolean;
};
export type UsersType = {
  users: UserType[];
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalCount: (users: number) => void
};

export class Users extends Component<UsersType> {
  componentDidMount(): void {
    axios
       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.setCurrentPage}&count=${this.props.pageSize}`)
       .then((response) => {
         this.props.setUsers(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
       });
 }

  onChangePage = (page: number) => {
    this.props.setCurrentPage(page);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }
  render() {
    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i = 1;i<= pageCount;i++) {
      pages.push(i);
    }
    
  let curP = this.props.currentPage;
  let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
  let curPL = curP + 5;
  let slicedPages = pages.slice( curPF, curPL);
    return (
      <div>
        <div> {slicedPages.map ( p => {
          return <button onClick={()=> this.onChangePage(p)} key={p} className={this.props.currentPage === p ? s.selected : ''}>{p}</button>})}
        </div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div className={s.avatar}>
                  <img src={u.photos.small ? u.photos.small : ava} alt="" />
                </div>
                <div>
                  {u.followed ? (
                    <button onClick={() => this.props.unfollow(u.id)}>
                      Followed
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>
                      Unfollow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
