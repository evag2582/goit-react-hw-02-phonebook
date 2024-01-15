import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../App.module.css';

class Filter extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onFilterChange } = this.props;

    return (
      <div className={css.filterConttactName}>
        <h5>Contacts</h5>
        <span className={css.find}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={onFilterChange}
        />
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} - {contact.number}
              <button onClick={() => this.handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
