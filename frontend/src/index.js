import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import catsReducer from './reducers/catsReducer'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';

//setup browser devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// setup store--pass in reducer and thunk middleware
// store globally stores data
// reducer takes in action object and updates store accordingly
// thunk allows for asychronous fetches
// anytime data is dispatched to the store the action object will be sent to reducer, which will then update the store's value
let store = createStore(catsReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  // give app access to store
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
