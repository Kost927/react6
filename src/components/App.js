import React, { Component } from "react";
import "./App.module.css";
// import { v4 as uuidv4 } from "uuid";
import ContactsList from "./contactslist/ContactsList";
import Form from "./Form/Form";
import Alert from "./Alert/Alert";

import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';


class App extends Component {
  state = {
    // contacts: [],
    // filter: "",
    name: "",
    number: "",
    // alert: false,
  };

  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem('contacts');
  //   if (persistedContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistedContacts),
  //     });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.contacts.find(contact => contact.name === this.state.name)) {
      this.props.showAlert()
      setTimeout (() => this.props.showAlert(), 2000)
    } else {

    this.props.onAddContact({...this.state})
    this.setState({name: "", number: ""})
    }
  };

  addContact = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    const { name, number } = this.state;
    console.log(name)
    return (
      <>
      {this.props.alertActive && <Alert/>}
        <Form
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
          addContact={this.addContact}
        />
        <ContactsList/>
      </>
    );
  }
}

const mapStateToProos = state => {
  console.log('state', state)
  return {
    contacts: state.items,
    alertActive: state.alert
  };
};

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
  showAlert: contactsActions.sameContact
  }



export default connect(mapStateToProos, mapDispatchToProps)(App);
