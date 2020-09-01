import { v4 as uuidv4 } from 'uuid';

import constans from './contactsConstans';

const addContact = contact => {
  return {
    type: constans.ADD_CONTACT,
    payload: {
      ...contact,
      id: uuidv4(),
    },
  };
};


const removeContact = id => {
    return {
      type: constans.REMOVE_CONTACT,
      payload: id,
    };
  };

  const filterContacts = e => {
    return {
      type: constans.FILTER_CONTACT,
      payload: e.target.value,
    };
  };

  const sameContact = () => {
    return {
      type: constans.SAME_CONTACT,
    };
  };

  export default {addContact, removeContact, filterContacts, sameContact}