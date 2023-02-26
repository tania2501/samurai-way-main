import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { DialogType, MessageType, PostType } from './App';
import { addUser, state, subscribe, updateText } from './redux/state';

export type StateType = {
  profilePage: {
    posts: PostType[]
    newTextValue: string
  }
  dialogPage: {
    messages: MessageType[]
    dialogs: DialogType[]
  }
}

let renderedEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state} addUser={addUser} updateText={updateText}/>,
  document.getElementById('root'));
}
renderedEntireTree(state);
subscribe(renderedEntireTree);
