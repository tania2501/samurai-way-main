
import { v1 } from "uuid";
import { PostType } from "../App";
import { ProfilePageType } from "../components/Profile/Profile";
import { ActionsTypes } from "./store-redux";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";
  let initialState = {
    posts: [
      { id: v1(), text: "how are you now?", likesCount: 10 },
      { id: v1(), text: "happy day", likesCount: 12 },
      { id: v1(), text: "are you serious???", likesCount: 14 },
    ],
    newTextValue: ''
  }
export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  state = initialState;
  switch (action.type) {
    case ADD_POST: 
      const newPost: PostType = {
      id: v1(),
      text: state.newTextValue,
      likesCount: 0
      };
      state.posts.push(newPost);
      state.newTextValue = '';
      return state;
    case CHANGE_NEW_TEXT: 
    state.newTextValue = action.text;
      return state;
    default:
      return state;
  }
};
export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
};
export const updateTextAC = (text: string) => {
  return {
    type: CHANGE_NEW_TEXT,
    text: text
  } as const
};
