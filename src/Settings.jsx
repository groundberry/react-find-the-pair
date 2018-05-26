/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import './Settings.css';

function Settings(props) {
  const { level, onChange } = props;

  return (
    <form className="Settings">
      <h3 className="Settings--header">Update settings:</h3>
      <label>
        Change level:{' '}
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
  level: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  level: 2,
};

export default Settings;
