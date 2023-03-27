import axios from "axios";
import React from "react";
import { v1 } from "uuid";
import ava from '../../assets/img/users.png';
import s from './Users.module.css'

export type UserType = {
  id: string;
  photos: string | undefined;
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
  if (props.users.length === 0) {
    
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
      
    })
    // props.setUsers([
    //   { id: v1(), avatar: ava, followed: true, name: 'Alex', status: 'hello', location: {country: 'Slovakia', city: 'Bratislava'} },
    //   { id: v1(), avatar: ava, followed: true, name: 'Artem', status: 'hi', location: {country: 'Ukraine', city: 'Lugansk'} },
    //   { id: v1(), avatar: ava, followed: false, name: 'Vasyl', status: ':=)', location: {country: 'Belarus', city: 'Minsk'} },
    //   { id: v1(), avatar: ava, followed: false, name: 'Vika', status: 'im angry', location: {country: 'Rostov', city: 'Russia'} },
    // ])
  }
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
              <div className={s.avatar}>
                <img src={ava} alt="" />
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
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
