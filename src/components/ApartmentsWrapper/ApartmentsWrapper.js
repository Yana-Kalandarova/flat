import React, {Fragment, useState, useEffect} from 'react';

import {ApartmentList, Menu} from '../../components';
import {getFullApartmentsList, filterApartmentList, handleUpdateApartmentsResult} from './helpers';

const fullApartmentList = getFullApartmentsList();

const ApartmentsWrapper = () => {
	const [apartmentList, setApartmentList] = useState(fullApartmentList);
	const [roomsAmount, setRoomsAmount] = useState(null);
	const [isShowSoldOutItems, setIsShowSoldOutItems] = useState(false);

	const handleChangeRoomsAmount = ({target}) => {
		const {value} = target;

		setRoomsAmount(value);
	};

	const handleChangeShowSoldOut = ({target}) => {
		const {checked} = target;

		setIsShowSoldOutItems(checked);
	};

	useEffect(() => {
		const updatedApartmentList = filterApartmentList(
			fullApartmentList,
			{roomsAmount, isShowSoldOutItems}
		);

		setApartmentList(updatedApartmentList);
	}, [isShowSoldOutItems, roomsAmount]);

	const menuHandlers = {
		handleUpdateApartmentsResult,
		handleChangeRoomsAmount,
		handleChangeShowSoldOut,
	};

	const menuData = {
		isShowSoldOutItems,
		roomsAmount,
	};

	return (
		<Fragment>
			<Menu menuHandlers={menuHandlers} menuData={menuData} />
			<ApartmentList list={apartmentList} />
		</Fragment>
	);
};

export default ApartmentsWrapper;