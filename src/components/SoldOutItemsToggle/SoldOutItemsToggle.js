import React from 'react';
import PropTypes from 'prop-types';

import {CheckboxButton} from '../index';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

const SoldOutItemsToggle = ({handleChange, isChecked}) => (
	<CheckboxButton
		isChecked={isChecked}
		label="Show Sold Out Apartments"
		handleChange={handleChange}
		name="isSoldOut" />
);

SoldOutItemsToggle.propTypes = propTypes;

export default SoldOutItemsToggle;