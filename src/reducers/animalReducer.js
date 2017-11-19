// Reducer
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
