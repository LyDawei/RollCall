import { combineReducers } from 'redux';
import animalReducer from './animalReducer.js';
// import { routerReducer } from 'react-router-redux';

const rollCallApp = combineReducers({
  // routing: routerReducer,
  animalReducer
});

export default rollCallApp;
