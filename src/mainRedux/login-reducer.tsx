import { Reducer } from "redux";
import { ActionsTypes, StateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../dal/api";

const SET_USER_DATA = "SET_USER_DATA ";
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const SET_CAPTCHA = 'SET_CAPTCHA';
const initialState = {} as AuthorizationType;

export const loginReducer: Reducer<AuthorizationType, ActionsTypes> = ( state = { ...initialState },action ): AuthorizationType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: action.isAuth, id: action.id };
    case SET_AUTH_ERROR:
      return {...state, error: action.error}
    case SET_CAPTCHA: 
      return {...state, captcha: action.captcha}
    default:
      return state;
  }
};
//AC
export const setAuthUserData = (data: LoginDataType, isAuth: boolean, id: number) => {
  return { type: SET_USER_DATA, data, isAuth, id } as const;
};
export const setAuthUserError = (error: string) => {
  return { type: SET_AUTH_ERROR, error } as const;
};
export const setCaptcha = (captcha: string) => {
  return { type: SET_CAPTCHA, captcha } as const;
};
//thunks
export const authUser = (): ThunkType => async (dispatch) => {
  return authAPI.auth().then(res=> {
    if (res.resultCode === 0) {
      dispatch(setAuthUserData(res.data, true, res.data.id));
    }
  })
};
export const loginUser = (loginData: LoginDataType): ThunkType => async (dispatch) => {
  const res = await authAPI.login(loginData);
  if (res.resultCode === 0) {
    dispatch(authUser());
  } else {
    if(res.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    dispatch(setAuthUserError(res.messages[0]))
  }
};
export const logOutUser = (): ThunkType => async dispatch => {
  const res = await authAPI.logOut()
  if (res.resultCode === 0) {
    dispatch(setAuthUserData(res.data, false, res.data.id));
  }
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const res = await securityAPI.getCaptcha()
  console.log(res)
  dispatch(setCaptcha(res.url))
};
//types
export type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionsTypes>;
export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string
};
export type AuthorizationType = {
  id: number;
  login: string;
  email: string;
  isAuth: boolean;
  error: string
  captcha: string | null
};