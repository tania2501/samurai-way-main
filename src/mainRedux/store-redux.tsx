import { combineReducers, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { addMessageAC, dialogReducer, newMessageAC } from './dialog-reducer';
import { addPostAC, profileReducer, updateTextAC } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC>
export type RootStateType = ReturnType<typeof reducers>;
export type StoreType = Store<RootStateType, ActionsTypes>;

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebar: sidebarReducer,
})

export let store: StoreType = createStore(reducers);