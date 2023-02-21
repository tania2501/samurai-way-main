import React from "react";
import { v1 } from "uuid";
import { renderedEntireTree } from "../render";

export let state = {
  profilePage: {
    posts: [
      { id: v1(), text: "how are you now?", likesCount: 10 },
      { id: v1(), text: "happy day", likesCount: 12 },
      { id: v1(), text: "are you serious???", likesCount: 14 },
    ],
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
  },
};
export let addUser = (text: string) => {
  let newPost= {
    id: v1(),
    text: text,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  renderedEntireTree(state);
}
