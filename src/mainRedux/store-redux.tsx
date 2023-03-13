import { Reducer } from 'react';
import { combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { StateType } from '..';
import { addMessageAC, dialogReducer, newMessageAC } from './dialog-reducer';
import { addPostAC, profileReducer, updateTextAC } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC>
export type RootStateType = ReturnType<typeof rootReducer>;
export type StoreType = Store<StateType, ActionsTypes>;

export const rootReducer = combineReducers<Reducer<StateType, ActionsTypes>>({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebar: sidebarReducer,
})

export const store: StoreType = createStore(rootReducer);