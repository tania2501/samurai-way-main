import { Reducer } from "react";
import { v1 } from "uuid";
import { ActionsTypes } from "./store-redux";
import ava from './Photo.png'
import { UserType } from "../components/users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

export type MainUserType = {
  users: UserType[]
}
const initialState = {
  users: [
    { id: v1(), avatar: ava, followed: true, name: 'Alex', status: 'hello', location: {country: 'Slovakia', city: 'Bratislava'} },
    { id: v1(), avatar: ava, followed: true, name: 'Artem', status: 'hi', location: {country: 'Ukraine', city: 'Lugansk'} },
    { id: v1(), avatar: ava, followed: false, name: 'Vasyl', status: ':=)', location: {country: 'Belarus', city: 'Minsk'} },
    { id: v1(), avatar: ava, followed: false, name: 'Vika', status: 'im angry', location: {country: 'Rostov', city: 'Russia'} },
  ],
 
};

export const usersReducer: Reducer<MainUserType, ActionsTypes> = ( state = { ...initialState }, action: ActionsTypes): MainUserType => {
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map ( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          };
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map ( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          };
          return u;
        })
      };
    case SET_USERS:
       return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
};
export const followAC = (userId: string) => {
  return {
    type: FOLLOW,
    userId: userId,
  } as const;
};
export const unfollowAC = (userId: string) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users: users,
  } as const;
};
