import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { DialogType, MessageType, PostType } from './App';
import { addUser } from './redux/state';

type StateType = {
  profilePage: {
    posts: PostType[]
  }
  dialogPage: {
    messages: MessageType[]
    dialogs: DialogType[]
  }
}
export let renderedEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state} addUser={addUser}/>,
  document.getElementById('root'));
}