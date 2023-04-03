import { Reducer } from "redux";
import { UserType } from "../components/users/UsersC";
import { ActionsTypes } from "./store-redux";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

export type MainUserType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
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
       return {...state, users: [...action.users]};
    case SET_CURRENT_PAGE:
       return {...state, currentPage: action.page};
    case SET_TOTAL_COUNT:
       return {...state, totalUsersCount: action.users};
    default:
      return state;
  }
};
export const followAC = (userId: number) => {
  return {
    type: FOLLOW, userId
  } as const;
};
export const unfollowAC = (userId: number) => {
  return {
    type: UNFOLLOW, userId
  } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS, users
  } as const;
};
export const setCurrentPageAC = (page: number) => {
  return {
    type: SET_CURRENT_PAGE, page
  } as const;
};
export const setTotalCountAC = (users: number) => {
  return {
    type: SET_TOTAL_COUNT, users
  } as const;
};
