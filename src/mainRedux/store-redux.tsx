import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { addMessage, dialogReducer, changeMessage } from './dialog-reducer';
import { addPost, profileReducer, updateTextValue } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow, usersReducer } from './users-reducer';

export type AppDispatch = typeof store.dispatch
export type ActionsTypes = ReturnType<typeof addPost> | ReturnType<typeof updateTextValue> | ReturnType<typeof addMessage> | ReturnType<typeof changeMessage> | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount> | ReturnType<typeof toggleIsFetching>

export type StateType = ReturnType<typeof store.getState>

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

export const store = configureStore({reducer: rootReducer});
