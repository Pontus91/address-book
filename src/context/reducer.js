import { actionTypes } from './actions';

const applicationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CONTACTS:
      return { ...state, contacts: action.payload }
    case actionTypes.UPDATE_ERRORTEXT:
      return { ...state, errorText: action.payload }
    default: 
      return state;
  }
}

export {
  applicationReducer
}