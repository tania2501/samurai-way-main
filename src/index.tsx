import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './mainRedux/store-redux';
import { ProfilePageType } from './components/Profile/Profile';
import { DialogsType } from './components/Dialogs/Dialogs';

export type StateType = {
  profilePage: ProfilePageType
  dialogPage: DialogsType
  sidebar: {}
}

const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
     <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root'));
};
renderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  renderEntireTree(state)
});

