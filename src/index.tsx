import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { v1 } from 'uuid';
import { state } from './redux/state';

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);