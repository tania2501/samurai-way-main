import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { addMessageAC, dialogReducer, newMessageAC } from './dialog-reducer';
import { addPostAC, profileReducer, updateTextAC } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC, usersReducer } from './users-reducer';

export type AppDispatch = typeof store.dispatch
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalCountAC> | ReturnType<typeof toggleIsFetchingAC>

export type StateType = ReturnType<typeof store.getState>

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

export const store = configureStore({reducer: rootReducer});
