import { setTimeout } from "timers";

//Action Types
export const FETCH_HAS_ERRORED = 'FETCH_HAS_ERRORED';
export const FETCH_IS_LOADING = 'FETCH_IS_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const FETCH_ANIMAL_STATUS = 'FETCH_ANIMAL_STATUS';
export const FETCH_CHECK_OUT_ANIMAL_SUCCESS = 'FETCH_CHECK_OUT_ANIMAL_SUCCESS';

export function fetchAnimalHasErrored(bool) {
  return {
    type: FETCH_HAS_ERRORED,
    hasErrored: bool
  };
}

export function fetchAnimalIsLoading(bool) {
  return {
    type: FETCH_IS_LOADING,
    isLoading: bool
  };
}

export function fetchAnimalDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchAnimalSuccess(data) {
  return {
    type: FETCH_ANIMAL_SUCCESS,
    payload: data
  }
}

export function fetchAnimalStatusSuccess(data) {
  return {
    type: FETCH_ANIMAL_STATUS,
    payload: data
  };
}

export function fetchPostAnimalCheckIn(data) {
  return {
    type: FETCH_CHECK_OUT_ANIMAL_SUCCESS,
    payload: data
  };
}

//------- Thunks below ---------

export function fetchAnimalList() {
  return (dispatch) => {
    dispatch(fetchAnimalIsLoading(true));

    fetch('http://localhost:8000/api/v1/get-animal-list-in-room/2')
      .then((response) => {
        dispatch(fetchAnimalIsLoading(true));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(fetchAnimalDataSuccess(items)));
  };
}

export function fetchAnimal(pk) {
  return (dispatch) => {
    fetch(`http://localhost:8000/api/v1/animals/${pk}`)
      .then((response) => response.json())
      .then((items => dispatch(fetchAnimalSuccess(items))));
  }
}

export function fetchAnimalStatus(pk) {
  return dispatch => {
    fetch(`http://localhost:8000/api/v1/get-checked-out-animal/${pk}`)
      .then((response) => response.json())
      .then(items => dispatch(fetchAnimalStatusSuccess(items)))
  }
}


export function checkOutAnimal(animalPk, roomPk, note) {
  return dispatch => {
    fetch(`http://localhost:8000/api/v1/post-check-out-animal`, {
      headers: new Headers({'Content-Type':'application/json'}),
      method: 'POST',
      body: JSON.stringify({
        id: animalPk,
        room: roomPk,
        note: note
      })
    }).then((response) => response.json())
      .then(items => dispatch(fetchAnimalStatusSuccess(items)))
  }
}
