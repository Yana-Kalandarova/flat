import React, {Fragment} from 'react';
import {addApartmentToFavourite} from '../../services';

export const getApartmentInfoList = ({
	address, price, url, area, number_of_rooms, floor, number_of_floors
}) => {
	const {priceTotal, pricePerSquareMeter} = getApartmentPrices(price, area);

	return Object.entries({
		address,
		price: <Fragment>{priceTotal} (m<sup>2</sup>: {pricePerSquareMeter})</Fragment>,
		link: <a href={url} target="_blank">{url}</a>,
		area: `${area.total} / ${area.living} / ${area.kitchen}`,
		rooms: number_of_rooms,
		floor: `${floor} / ${number_of_floors}`,
	});
};

export const getApartmentPrices = (price, area) => {
	const {amount, currency} = price;
	const roundedPrice = Math.round(amount);

	return ({
		priceTotal: `${roundedPrice} ${currency}`,
		pricePerSquareMeter: `${Math.round(roundedPrice / area.total)} ${currency}`
	});
};

export const addToFavourite = async(id, updatedData) => {
	await addApartmentToFavourite(id, updatedData);
};
