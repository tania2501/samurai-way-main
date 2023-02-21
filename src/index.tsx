import React from 'react';
import './index.css';
import {state} from './redux/state';
import { renderedEntireTree } from './render';

renderedEntireTree(state)
