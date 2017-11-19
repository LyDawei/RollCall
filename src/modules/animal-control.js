import { disconnect } from "cluster";
import { setTimeout } from "timers";

export const ANIMAL_REQUESTED = 'animalControl/ANIMAL_REQUESTED';
export const ANIMAL_RETRIEVED = 'animalControl/ANIMAL_RETRIEVED';
export const ANIMAL_STATUS_UPDATED = 'animalControl/ANIMAL_STATUS_UPDATED';

const initialState = {
  numCats: 0,
  cats: {},
  isRequesting: false
};

// Store
export default (state = initialState, action) => {
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
      return state;
  }
};

export function animalRequest() {
  return dispatch => {
    dispatch({
      type: ANIMAL_REQUESTED
    });

    dispatch({
      type: ANIMAL_RETRIEVED
    });
  };
}

export function animalRequestAsync() {
  return dispatch => {
    dispatch({
      type: ANIMAL_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: ANIMAL_RETRIEVED
      }),
        3000
    });
  };
}

export function animalStatusUpdateAsync() {
  return dispatch => {
    dispatch({
      type: ANIMAL_REQUESTED
    });

    return setTimeout(
      dispatch({
        type: ANIMAL_STATUS_UPDATED
      }),
      3000
    );
  }
}
