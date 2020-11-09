import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxButton.css';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

const CheckboxButton = ({handleChange, isChecked, label, name}) => (
	<label className={`btn ${isChecked ? 'btn-dark' : 'btn-secondary'}`}>
		{label}
		<input type="checkbox" onChange={handleChange} name={name} checked={isChecked} />
	</label>
);

CheckboxButton.propTypes = propTypes;

export default CheckboxButton;