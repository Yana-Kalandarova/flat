import React from 'react';
import PropTypes from 'prop-types';

import {UpdateButton, RoomsAmountToggle} from '../index';

import './Menu.css';

const propTypes = {
	menuHandlers: PropTypes.shape({
		handleUpdateApartmentsResult: PropTypes.func.isRequired,
		handleChangeRoomsAmount: PropTypes.func.isRequired,
	}).isRequired,
};

const Menu = ({
	menuHandlers: {
		handleChangeRoomsAmount,
		handleUpdateApartmentsResult,
},
	menuData: {
		roomsAmount,
	}
}) => (
	<div className="menu container-fluid">
		<div className="row">
			<div className="col">
				<RoomsAmountToggle handleChange={handleChangeRoomsAmount} selectedValue={roomsAmount} />
			</div>
			<div className="col">
				<UpdateButton handleClick={handleUpdateApartmentsResult} />
			</div>
		</div>
	</div>
);

Menu.propTypes = propTypes;

export default Menu;
