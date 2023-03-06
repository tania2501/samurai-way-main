import { v1 } from "uuid";
import { DialogsType } from "../components/Dialogs/Dialogs";
import { ActionsTypes } from "./state";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

export const dialogReducer = (state: DialogsType, action: ActionsTypes) => {
  

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
