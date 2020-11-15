import React from 'react';
import PropTypes from 'prop-types';

import {UpdateButton, FavouriteOnlyToggle, RoomsAmountToggle, SoldOutItemsToggle, SortByDateToggle} from '../index';

import './Menu.css';

const propTypes = {
	menuHandlers: PropTypes.shape({
		handleUpdateApartmentsResult: PropTypes.func.isRequired,
		handleChangeRoomsAmount: PropTypes.func.isRequired,
		handleChangeShowFavouriteOnly: PropTypes.func.isRequired,
		handleChangeShowSoldOut: PropTypes.func.isRequired,
		handleChangeSortByDate: PropTypes.func.isRequired,
	}).isRequired,
};

const Menu = ({
	menuHandlers: {
		handleChangeRoomsAmount,
		handleChangeShowFavouriteOnly,
		handleChangeShowSoldOut,
		handleUpdateApartmentsResult,
		handleChangeSortByDate,
},
	menuData: {
		isShowFavouriteOnly,
		isShowSoldOutItems,
		isSortByDate,
		roomsAmount,
	}
}) => (
	<div className="menu container-fluid">
		<div className="row">
			<div className="col">
				<RoomsAmountToggle handleChange={handleChangeRoomsAmount} selectedValue={roomsAmount} />
			</div>
			<div className="col">
				<SortByDateToggle handleChange={handleChangeSortByDate} isChecked={isSortByDate} />
			</div>
			<div className="col">
				<SoldOutItemsToggle handleChange={handleChangeShowSoldOut} isChecked={isShowSoldOutItems} />
			</div>
			<div className="col">
				<FavouriteOnlyToggle handleChange={handleChangeShowFavouriteOnly} isChecked={isShowFavouriteOnly} />
			</div>
			<div className="col">
				<UpdateButton handleClick={handleUpdateApartmentsResult} />
			</div>
		</div>
	</div>
);

Menu.propTypes = propTypes;

export default Menu;
