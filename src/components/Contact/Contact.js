// Contact.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from '../App.module.css';
import Filter from '../Filter/Filter';
import ContactItem from '../Delete/Delete';

class Contact extends Component {
  state = {
    id: nanoid(),
    contacts: [],
    name: '',
    number: '',
    filter: '', // Add filter state
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleAddContact = event => {
    event.preventDefault();

    // Validate that both data are entered
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please provide both name and number.');
      return;
    }

    // Check if the contact with the same name already exists
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isDuplicate) {
      alert('Contact with the same name already exists.');
      return;
    }

    // Create the new object
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      number: this.state.number,
    };

    // Update the contacts
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      id: nanoid(),
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    // Filter out the contact with the specified id
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    // Update the contacts
    this.setState({
      contacts: updatedContacts,
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <form className={css.listForm}>
          <span>Name</span>
          <input
            type="text"
            placeholder="Please type your name"
            name="fullname"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <span>Number</span>
          <input
            type="tel"
            name="number"
            placeholder="Please type your number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
          <button
            className={css.button}
            type="submit"
            onClick={this.handleAddContact}
          >
            Add Contact
          </button>
        </form>
        <Filter
          contacts={filteredContacts}
          onFilterChange={this.handleFilterChange}
        />
        <ul>
          {filteredContacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={this.handleDeleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contact;
