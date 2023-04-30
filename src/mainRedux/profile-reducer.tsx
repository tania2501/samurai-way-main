import { v1 } from "uuid";
import { PostType } from "../App";
import { ProfilePageType } from "../components/Profile/Profile";
import { ActionsTypes, StateType } from "./store-redux";
import { Reducer } from "redux";
import { ProfileUserType } from "../components/Profile/ProfileContainer";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../dal/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const CHANGE_STATUS = 'CHANGE-STATUS'
let initialState = {
  posts: [
    { id: v1(), text: "how are you now?", likesCount: 10 },
    { id: v1(), text: "happy day", likesCount: 12 },
    { id: v1(), text: "are you serious???", likesCount: 14 },
  ],
  newTextValue: "",
  profile: {} as ProfileUserType,
  status: ''
};
export const profileReducer: Reducer<ProfilePageType, ActionsTypes> = (
  state = { ...initialState },
  action
): ProfilePageType => {
  switch (action.type) {
    case CHANGE_STATUS: 
      return {...state, status: action.status}
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        text: state.newTextValue,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newTextValue: "" };

    case CHANGE_NEW_TEXT:
      return {...state, newTextValue: action.text}
    case SET_USER_PROFILE:
        return {...state, profile: action.profile}
    default:
      return state;
  }
};
export const addPost = () => {
  return {
    type: ADD_POST,
  } as const;
};
export const updateTextValue = (text: string) => {
  return {
    type: CHANGE_NEW_TEXT, text
  } as const;
};
export const setUserProfile = (profile: ProfileUserType) => {
  return {
    type: SET_USER_PROFILE,
    profile
  } as const;
};
export const setStatus = (status: string) => {
  return {
    type: CHANGE_STATUS,
    status
  } as const;
};
export const getProfile = (id: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    usersAPI.getProfile(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  }
}
export const getStatus = (id: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    usersAPI.getStatus(id).then((data) => {
      dispatch(setStatus(data));
    });
  }
}
export const changeStatus = (status: string): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    usersAPI.changeStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    });
  }
}