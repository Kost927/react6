import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition} from 'react-transition-group';
import css from "./ContactsListItem.module.css";

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const ContactsListItem = ({ contact, removeContact }) => {
  console.log(2222222)
  return (
    <>
        <CSSTransition  timeout={1000} classNames={css}>
        <li name="name">
          {contact.name}: {contact.number}
          <button type="button" onClick={() => removeContact(contact.id)}>
            Delete
          </button>
        </li>
        </CSSTransition>
       
    </>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
removeContact: () => dispatch(contactsActions.removeContact(ownProps.contact.id))
  }
}


export default connect(null, mapDispatchToProps)(ContactsListItem);

ContactsListItem.propTypes = {
  filteredContacts: PropTypes.array,
  removePhone: PropTypes.func,
};
