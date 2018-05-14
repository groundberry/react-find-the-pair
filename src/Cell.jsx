import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.handleClickShowContent = this.handleClickShowContent.bind(this);
  }

  handleClickShowContent() {
    const { coordinates, onClick } = this.props;
    onClick(coordinates);
  }

  render() {
    const { content, showContent } = this.props;

    return (
      <Fragment>
        {showContent ? (
          <div
            className="Cell Cell--content"
          >
            {content}
          </div>
        ) : (
          <button
            className="Cell Cell--button"
            onClick={this.handleClickShowContent}
          >
            ?
          </button>
        )}
      </Fragment>
    );
  }
}

Cell.propTypes = {
  content: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  showContent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;
