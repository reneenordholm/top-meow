import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cats from './reducers/catsReducer'

import App from './App';

//setup browser devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// setup store--pass in reducer and thunk middleware
// store globally stores data
// reducer takes in action object and updates store accordingly
// thunk allows for asychronous fetches
let store = createStore(catsReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
