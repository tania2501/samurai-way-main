import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SamuraiApp } from './App';

const renderEntireTree = () => {
  ReactDOM.render(
    <SamuraiApp/> , document.getElementById('root'));
};
renderEntireTree();


