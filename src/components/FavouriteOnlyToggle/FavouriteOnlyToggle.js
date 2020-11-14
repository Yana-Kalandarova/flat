import React from 'react';
import PropTypes from 'prop-types';

import {CheckboxButton} from '../index';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

const FavouriteOnlyToggle = ({handleChange, isChecked}) => (
	<CheckboxButton
		isChecked={isChecked}
		label="Show Only Favourite"
		handleChange={handleChange}
		name="isShowFavouriteOnly" />
);

FavouriteOnlyToggle.propTypes = propTypes;

export default FavouriteOnlyToggle;