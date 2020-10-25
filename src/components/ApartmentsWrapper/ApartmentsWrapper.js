import React, {Fragment, useState, useEffect} from 'react';

import apartmentsResult from '../../data/apartments';
import {ApartmentList, Menu} from '../../components';
import {filterByRoomsAmount, handleUpdateApartmentsResult} from './helpers';

const fullApartmentList = Object.values(apartmentsResult);

const ApartmentsWrapper = () => {
	const [apartmentList, setApartmentList] = useState(fullApartmentList);
	const [roomsAmount, setRoomsAmount] = useState(null);

	const handleChangeRoomsAmount = ({target}) => {
		const {value} = target;

		setRoomsAmount(value);
	};

	useEffect(() => {
		const updatedApartmentList = filterByRoomsAmount(fullApartmentList, roomsAmount);

		setApartmentList(updatedApartmentList);
	}, [roomsAmount]);

	const menuHandlers = {
		handleUpdateApartmentsResult,
		handleChangeRoomsAmount
	};
	const menuData = {
		roomsAmount
	};

	return (
		<Fragment>
			<Menu menuHandlers={menuHandlers} menuData={menuData} />
			<ApartmentList list={apartmentList} />
		</Fragment>
	);
};

export default ApartmentsWrapper;