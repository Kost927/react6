import constans from './contactsConstans';
import { combineReducers } from 'redux';

// const  contactsReducerInitialState = {
// contacts: [],
// filter: "",
// }

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case constans.ADD_CONTACT:
      return [...state, action.payload];

    case constans.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
    switch (action.type) {

      case constans.FILTER_CONTACT:
        return state = action.payload
  
      default:
        return state;
    }
  };


  const sameContact = (state = false, action) => {
    switch (action.type) {

      case constans.SAME_CONTACT:
        return state = !state
  
      default:
        return state;
    }
  };

export default combineReducers({items: contactsReducer, filter: filterReducer, alert: sameContact });
