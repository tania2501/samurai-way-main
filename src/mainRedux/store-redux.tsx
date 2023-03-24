import { Reducer } from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { DialogsType } from '../components/Dialogs/DialogsContainer';
import { ProfilePageType } from '../components/Profile/Profile';
import { addMessageAC, dialogReducer, newMessageAC } from './dialog-reducer';
import { addPostAC, profileReducer, updateTextAC } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { followAC, setUsersAC, unfollowAC, usersReducer } from './users-reducer';
import { MainUserType } from './users-reducer';


export type AppDispatch = typeof store.dispatch
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


export type StateType = {
  profilePage: ProfilePageType
  dialogPage: DialogsType
  usersPage: MainUserType
  sidebar: {}
}

export const rootReducer = combineReducers<Reducer<StateType, ActionsTypes>>({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

export const store = configureStore({reducer: rootReducer});
