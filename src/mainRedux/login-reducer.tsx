import { Reducer } from "redux"
import { ActionsTypes, StateType } from "./store-redux"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../dal/api"

const SET_USER_DATA = 'SET_USER_DATA '

export type AutorizationType = {
  id: number
  login: string
  email: string
  isAuth: boolean
}
const initialState = {} as AutorizationType

export const loginReducer: Reducer<AutorizationType, ActionsTypes> = (
  state = { ...initialState },
  action
): AutorizationType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
}; 

export const setAuthUserData = (data: AutorizationType) => {
  return {type: SET_USER_DATA, data} as const;
}
export const authUser = (): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    usersAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
      }
    });
  }
}