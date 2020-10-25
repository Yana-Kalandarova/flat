import React from 'react';

export const getApartmentInfoList = ({
	address, price, url, area, number_of_rooms, floor, number_of_floors
}) => Object.entries({
	address,
	price: `${Math.round(price.amount)} ${price.currency}`,
	link: <a href={url} target="_blank">{url}</a>,
	area: `${area.total} / ${area.living} / ${area.kitchen}`,
	rooms: number_of_rooms,
	floor: `${floor} / ${number_of_floors}`,
});
