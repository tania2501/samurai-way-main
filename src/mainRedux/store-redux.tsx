import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { addMessage, dialogReducer, changeMessage } from './dialog-reducer';
import { addPost, profileReducer, setPhoto, setStatus, setUserProfile, updateTextValue } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, toggleIsFollowing, unfollow, usersReducer } from './users-reducer';
import { loginReducer, setAuthUserData, setAuthUserError } from './login-reducer';
import { useDispatch } from 'react-redux';
import { appReducer, initializationSuccesses } from './app-reducer';

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type ActionsTypes = ReturnType<typeof addPost> | ReturnType<typeof updateTextValue> | ReturnType<typeof addMessage> | ReturnType<typeof changeMessage> | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleIsFollowing> | ReturnType<typeof setStatus> | ReturnType<typeof setAuthUserError> | ReturnType<typeof initializationSuccesses> | ReturnType<typeof setPhoto>

export type StateType = ReturnType<typeof store.getState>

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: loginReducer,
  app: appReducer
})

export const store = configureStore({reducer: rootReducer});

//@ts-ignore
window.store = store;
