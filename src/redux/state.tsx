import { v1 } from "uuid";
import { DialogType, MessageType, PostType } from "../App";
import { addMessageAC, dialogReducer, newMessageAC } from "./dialog-reducer";
import { addPostAC, profileReducer, updateTextAC } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export type StoreType = {
  _state: StateType
  getState: () => StateType
  _onChange: ()=>void
  subscribe: (observer: ()=>void) => void
  dispatch: (action: ActionsTypes) => void
}
export type StateType = {
  profilePage: {
    posts: PostType[]
    newTextValue: string
  }
  dialogPage: {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessage: string
  }
  sidebar: {}
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC>

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), text: "how are you now?", likesCount: 10 },
        { id: v1(), text: "happy day", likesCount: 12 },
        { id: v1(), text: "are you serious???", likesCount: 14 },
      ],
      newTextValue: ''
    },
    dialogPage: {
      messages: [
        { id: v1(), message: "Hi" },
        { id: v1(), message: "Hello" },
        { id: v1(), message: "How are you?" },
        { id: v1(), message: "Can i help you?" },
        { id: v1(), message: "What are you doing now?" },
      ],
      dialogs: [
        { id: v1(), name: "Anna" },
        { id: v1(), name: "Julia" },
        { id: v1(), name: "Olga" },
        { id: v1(), name: "Nina" },
        { id: v1(), name: "Victoria" },
      ],
      newMessage: '',
    },
    sidebar: {},
  },
  getState  () {
    return this._state
  },
  _onChange () {
    console.log('State changed')
  },
  subscribe (observer) {
    this._onChange = observer;
  },
  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._onChange();
  }
}