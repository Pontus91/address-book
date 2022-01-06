import { actionTypes } from './actions';

const applicationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CONTACTS:
      return { ...state, contacts: action.payload };
    case actionTypes.UPDATE_ERRORTEXT:
      return { ...state, errorText: action.payload };
    case actionTypes.UPDATE_SEARCH_RESULT: {
      return { ...state, searchResult: action.payload };
    }
    case actionTypes.UPDATE_SORTING: {
      return { ...state, sortBy: action.payload };
    }
    case actionTypes.UPDATE_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};

export { applicationReducer };
