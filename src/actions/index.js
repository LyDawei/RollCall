import { disconnect } from "cluster";
import { setTimeout } from "timers";

// Action Types
export const ANIMAL_REQUESTED = 'animalControl/ANIMAL_REQUESTED';
export const ANIMAL_RETRIEVED = 'animalControl/ANIMAL_RETRIEVED';
export const ANIMAL_STATUS_UPDATED = 'animalControl/ANIMAL_STATUS_UPDATED';

const initialState = {
  numCats: 0,
  cats: {},
  isRequesting: false
};

// Action Creators
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
