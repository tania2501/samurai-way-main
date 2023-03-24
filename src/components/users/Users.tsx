import React from "react";

export type UserType = {
  id: string;
  avatar: string;
  followed: boolean;
  name: string;
  status: string;
  location: { city: string; country: string };
};
export type UsersType = {
  users: UserType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
};

export const Users = (props: UsersType) => {
  const followed = (userId: string) => {
    props.follow(userId)
  };
  const unFollowed = (userId: string) => {
    props.unfollow(userId)
  }
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.avatar} alt="" />
              </div>
              <div>
                
                  {u.followed ? <button onClick={()=>unFollowed(u.id)}>Followed</button> : <button onClick={()=>followed(u.id)}>Unfollow</button>}
                
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
