import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rollCallApp from './reducers/rootReducer.js';

let store = createStore(
  rollCallApp,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
