import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	handleClick: PropTypes.func.isRequired,
};

const UpdateButton = ({handleClick}) => (
	<button className="btn btn-primary" onClick={handleClick}>Fetch New Apartments</button>
);

UpdateButton.propTypes = propTypes;

export default UpdateButton;