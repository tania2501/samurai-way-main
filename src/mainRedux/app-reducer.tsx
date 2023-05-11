import { Reducer } from "redux";
import { ThunkType } from "./login-reducer";
import { authUser } from "./login-reducer";
import { ActionsTypes } from "./store-redux";

type AppReducerType = {
  initialization: boolean
}

const initialState = {
  initialization: false
}
const SET_INITIALIZATION = 'SET_INITIALIZATION'
export const appReducer: Reducer<AppReducerType, ActionsTypes> = (state = {...initialState}, action): AppReducerType => {
  switch(action.type) {
    case SET_INITIALIZATION :
      return {...state, initialization: true}
    default:
      return state
  }
}

export const initializationSuccesses = () => ({type: SET_INITIALIZATION} as const)
//thunks
export const initializationApp = ( ): ThunkType => async dispatch => {
  dispatch(authUser()).then(()=>{
    dispatch(initializationSuccesses())
  })
  
}