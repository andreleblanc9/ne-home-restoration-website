import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import allReducers from '_reducers/index';
/* Import the JSON data file */
import defaultState from '_data/state';
/* Our default state object */
const loggerSettings = {
  warning: () => false
};
const middleWare = composeWithDevTools(applyMiddleware(promise(), thunk, createLogger(loggerSettings)));
const store = middleWare(createStore)(allReducers, defaultState);
//const history = syncHistoryWithStore(browserHistory, store);

export {
  store
  //history
};