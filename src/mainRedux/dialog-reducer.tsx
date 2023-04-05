import { v1 } from "uuid";
import { DialogsType } from "../components/Dialogs/DialogsContainer";
import { ActionsTypes } from "./store-redux";
import { Reducer } from "redux";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

const initialState = {
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
  newMessage: "",
};

export const dialogReducer: Reducer<DialogsType, ActionsTypes> = (
  state = { ...initialState },
  action
): DialogsType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessageText = state.newMessage;
      const newMessage = {
        id: v1(),
        message: newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessage: "",
      };
    case NEW_MESSAGE_TEXT:
      return { ...state, newMessage: action.text };
    default:
      return state;
  }
};
export const addMessage = () => {
  return {
    type: ADD_NEW_MESSAGE,
  } as const;
};
export const changeMessage = (text: string) => {
  return {
    type: NEW_MESSAGE_TEXT,
    text: text,
  } as const;
};
