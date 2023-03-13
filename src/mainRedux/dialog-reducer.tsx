import { v1 } from "uuid";
import { DialogsType } from "../components/Dialogs/DialogsContainer";
import { ActionsTypes } from "./store-redux";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

const initialState =  {
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
}

export const dialogReducer = (state: DialogsType, action: ActionsTypes): DialogsType => {
  state = initialState;
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessageText = state.newMessage;
      state.messages.push({ id: v1(), message: newMessageText });
      state.newMessage = "";
      return state;
    case NEW_MESSAGE_TEXT:
      state.newMessage = action.text;
      return state;
    default:
      return state;
  }
};
export const addMessageAC = () => {
  return {
    type: ADD_NEW_MESSAGE,
  } as const
}
export const newMessageAC = (text: string) => {
  return {
    type: NEW_MESSAGE_TEXT,
    text: text
  } as const
}
