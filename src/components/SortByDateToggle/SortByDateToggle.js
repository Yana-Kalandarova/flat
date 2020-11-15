import React from 'react';
import PropTypes from 'prop-types';

import {CheckboxButton} from '../index';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

const SortByDateToggle = ({handleChange, isChecked}) => (
	<CheckboxButton
		isChecked={isChecked}
		label="Show Resent First"
		handleChange={handleChange}
		name="isSortByDate" />
);

SortByDateToggle.propTypes = propTypes;

export default SortByDateToggle;