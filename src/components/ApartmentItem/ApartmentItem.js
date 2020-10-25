import React from 'react';
import PropTypes from 'prop-types';

import {ApartmentInfo, PriceHistory} from '../index';
import {getApartmentInfoList} from './helpers';

const propTypes = {
	id: PropTypes.number.isRequired,
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
	priceHistory: PropTypes.array.isRequired,
};

const ApartmentItem = ({
	id,
	location: {address},
	area,
	floor,
	number_of_floors,
	number_of_rooms,
	url,
	photo,
	price,
	priceHistory,
}) => {
	const apartmentInfoList = getApartmentInfoList({address, price, url, area, number_of_rooms, floor, number_of_floors});

	return (
		<li key={id} className="row apartment-item">
			<div className="col-auto">
				<img src={photo} alt={address} className="apartment-item--img" />
			</div>
			<div className="col-4">
				<ApartmentInfo infoList={apartmentInfoList} />
			</div>
			<div className="col-auto">
				<PriceHistory historyList={priceHistory} />
			</div>
		</li>
	);
};

ApartmentItem.propTypes = propTypes;

export default ApartmentItem;