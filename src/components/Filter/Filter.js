import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../App.module.css'

class Filter extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const { onFilterChange } = this.props;

    return (
      <div className={css.filterConttactName}>
        <h5>Contacts</h5>
        <span className={css.find}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={onFilterChange}
        />
      </div>
    );
  }
}

export default Filter;
