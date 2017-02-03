import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import App from './App';
import rootReducer from './reducers/index';

import './index.css';

// An initial Redux state can be defined
const initialState = undefined;

// Redux dev tools support, if present
const maybeDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
  applyMiddleware(
    promiseMiddleware
  ),
  maybeDevTools
);

const store = createStore(rootReducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
