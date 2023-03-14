import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './mainRedux/store-redux';
import { StoreContext } from './StoreContext';


const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider> 
    </BrowserRouter>,
    document.getElementById('root'));
};
renderEntireTree();
store.subscribe(renderEntireTree);

