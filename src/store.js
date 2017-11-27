import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleWare, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rollCallApp from './reducers/rootReducer.js';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development'){
  const devToolsExtension = window.devToolsExtension;

  if(typeof devToolsExtension === 'function'){
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rollCallApp,
  initialState,
  composedEnhancers
);

export default store;
