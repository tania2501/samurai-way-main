import React from "react";
import { v1 } from "uuid";
import { StateType } from "..";

let renderedEntireTree = (state: StateType) => {
  console.log('State changed')
}
export let state = {
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
  },
};
export const addUser = () => {
  let newPost= {
    id: v1(),
    text: state.profilePage.newTextValue,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newTextValue = '';
  renderedEntireTree(state);
}
export const updateText = (text: string) => {
    let newText = text;
    state.profilePage.newTextValue = newText;
    renderedEntireTree(state);
}
export const subscribe = (observer: (state: StateType)=>void) => {
  renderedEntireTree = observer;
}
