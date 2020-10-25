import React from 'react';
import PropTypes from 'prop-types';

import {Toggle} from '../index';
import {ROOMS_AMOUNT_MAP} from '../../constants';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
};

const RoomsAmountToggle = ({handleChange, selectedValue}) => (
	<Toggle list={ROOMS_AMOUNT_MAP} handleChange={handleChange} name="roomsAmount" selectedValue={selectedValue} />
);

RoomsAmountToggle.propTypes = propTypes;

export default RoomsAmountToggle;