
import { v1 } from "uuid";
import { PostType } from "../App";
import { ProfilePageType } from "../components/Profile/Profile";
import { ActionsTypes} from "./state";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  
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
