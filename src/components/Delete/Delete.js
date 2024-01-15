import React from 'react';
import PropTypes from 'prop-types';
import css from '../App.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.filterConttactName} key={contact.id}>
      {contact.name} - {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
