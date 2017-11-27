import { ANIMAL_REQUESTED } from '../actions';
import { ANIMAL_RETRIEVED } from '../actions';
import { ANIMAL_STATUS_UPDATED } from '../actions';

import request from 'request';

const initialState = {
  cats: [],
  isRequesting: false,
  hasRequestedData: false
};

// Reducer
export default function animalReducer(state = initialState, action) {
  switch (action.type) {
    case ANIMAL_REQUESTED:
      return {
        ...state,
        isRequesting: true
      };

    case ANIMAL_RETRIEVED:
      return {
        ...state,
        numCats: state.numCats + 1,
        isRequesting: false
      };

    case ANIMAL_STATUS_UPDATED:
      return {
        ...state,
        isRequesting: false
      };

    default:
      if(!state.hasRequestedData && !state.cats.length){
        request.get('http://localhost:8000/api/v1/animals', (err, res, body)=>{
          state.cats = JSON.parse(body);
        });
        return state;        
      }
      return state;
  }
};
