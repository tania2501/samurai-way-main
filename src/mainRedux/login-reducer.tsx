import { Reducer } from "redux";
import { ActionsTypes, StateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../dal/api";

const SET_USER_DATA = "SET_USER_DATA ";
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
const initialState = {} as AutorizationType;

export const loginReducer: Reducer<AutorizationType, ActionsTypes> = ( state = { ...initialState },action ): AutorizationType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: action.isAuth };
    case SET_AUTH_ERROR:
      return {...state, error: action.error}
    default:
      return state;
  }
};
//AC
export const setAuthUserData = (data: LoginDataType, isAuth: boolean) => {
  return { type: SET_USER_DATA, data, isAuth } as const;
};
export const setAuthUserError = (error: string) => {
  return { type: SET_AUTH_ERROR, error } as const;
};
//thunks
export const authUser = (): ThunkType => async (dispatch) => {
  return authAPI.auth().then(res=> {
    if (res.resultCode === 0) {
      dispatch(setAuthUserData(res.data, true));
    }
  })
};
export const loginUser = (loginData: LoginDataType): ThunkType => async (dispatch) => {
  const res = await authAPI.login(loginData);
  if (res.resultCode === 0) {
    dispatch(authUser());
  } else {
    dispatch(setAuthUserError(res.messages[0]))
  }
};
export const logOutUser = (): ThunkType => async dispatch => {
  const res = await authAPI.logOut()
  if (res.resultCode === 0) {
    dispatch(setAuthUserData(res.data, false));
  }
};
//types
export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionsTypes>;
export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type AutorizationType = {
  id: number;
  login: string;
  email: string;
  isAuth: boolean;
  error: string
};