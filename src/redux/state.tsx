import { v1 } from "uuid";
import { DialogType, MessageType, PostType } from "../App";

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
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof newMessageAC>

export const addPostAC = () => {
  return {
    type: "ADD-POST"
  } as const
}
export const updateTextAC = (text: string) => {
  return {
    type: "CHANGE-NEW-TEXT",
    text: text
  } as const
}
export const addMessageAC = () => {
  return {
    type: "ADD-NEW-MESSAGE",
  } as const
}
export const newMessageAC = (text: string) => {
  return {
    type: "NEW-MESSAGE-TEXT",
    text: text
  } as const
}
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
    if (action.type === "ADD-POST") {
      const newPost: PostType = {
        id: v1(),
        text: this._state.profilePage.newTextValue,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newTextValue = '';
      this._onChange();
    } else if (action.type === "CHANGE-NEW-TEXT") {
      this._state.profilePage.newTextValue = action.text;
      this._onChange();
    } else if (action.type === "ADD-NEW-MESSAGE") {
      const newMessageText = this._state.dialogPage.newMessage;
      this._state.dialogPage.messages.push({id: v1(), message: newMessageText});
      this._state.dialogPage.newMessage = '';
      this._onChange();
    } else if (action.type === "NEW-MESSAGE-TEXT") {
      this._state.dialogPage.newMessage = action.text;
      this._onChange();
    }
  }
}