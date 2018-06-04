/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import './Settings.css';

function Settings(props) {
  const { level, onChange } = props;

  return (
    <form className="Settings">
      <label>
        Select level:{' '}
        <select value={level} onChange={onChange}>
          <option value={1}>Beginner</option>
          <option value={2}>Medium</option>
          <option value={3}>Expert</option>
        </select>
      </label>
    </form>
  );
}

Settings.propTypes = {
  level: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Settings;
