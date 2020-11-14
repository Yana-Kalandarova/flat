import React from 'react';
import PropTypes from 'prop-types';

import {ApartmentInfo, CheckboxButton, PriceHistory} from '../index';
import {getApartmentInfoList, addToFavourite} from './helpers';

const propTypes = {
	id: PropTypes.number.isRequired,
	isActual: PropTypes.bool,
	location: PropTypes.shape({
		address: PropTypes.string.isRequired,
	}).isRequired,
	area: PropTypes.shape({
		total: PropTypes.number.isRequired,
		living: PropTypes.number.isRequired,
		kitchen: PropTypes.number,
	}).isRequired,
	floor: PropTypes.number.isRequired,
	number_of_floors: PropTypes.number.isRequired,
	number_of_rooms: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	price: PropTypes.shape({
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}).isRequired,
	priceHistory: PropTypes.object.isRequired,
};

const defaultProps = {
	isActual: false
};

const ApartmentItem = ({
	id,
	isActual,
	location: {address},
	area,
	floor,
	number_of_floors,
	number_of_rooms,
	url,
	photo,
	price,
	priceHistory,
  isFavourite,
}) => {
	const apartmentInfoList = getApartmentInfoList({address, price, url, area, number_of_rooms, floor, number_of_floors});
	const priceHistoryList = priceHistory.value;

	return (
		<li key={id} className={`row apartment-item ${isActual ? 'apartment-item--actual' : 'apartment-item--deprecated'}`}>
			<div className="col-auto">
				<img src={photo} alt={address} className="apartment-item--img" />
				<CheckboxButton
					className="apartment-item--btn-add"
					isChecked={isFavourite}
					label={`${isFavourite ? "remove from" : "add to"} favourite`}
					handleChange={() => addToFavourite(id, {isFavourite: !isFavourite})}
					name="isFavourite" />
			</div>
			<div className="col-4">
				<ApartmentInfo infoList={apartmentInfoList} />
			</div>
			<div className="col-auto">
				<PriceHistory historyList={priceHistoryList} />
			</div>
		</li>
	);
};

ApartmentItem.propTypes = propTypes;
ApartmentItem.defaultProps = defaultProps;

export default ApartmentItem;