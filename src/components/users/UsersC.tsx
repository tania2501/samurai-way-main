import axios from "axios";
import React, { Component } from "react";
import ava from "../../assets/img/users.png";
import s from "./Users.module.css";

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: null;
    large: null;
  };
  status: null | string;
  followed: boolean;
};
export type UsersType = {
  users: UserType[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
};

export class Users extends Component<UsersType> {
  componentDidMount(): void {
     axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div className={s.avatar}>
                  <img src={ava} alt="" />
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
