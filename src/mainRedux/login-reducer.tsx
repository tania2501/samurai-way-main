import { Reducer } from "redux"
import { ActionsTypes } from "./store-redux"

const SET_USER_DATA = 'SET_USER_DATA '

export type AutorizationType = {
  id: number
  login: string
  email: string
  isAuth: boolean
}
const initialState = {
  // id: 0,
  // login: '',
  // email: '',
  // isAuth: false
} as AutorizationType


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