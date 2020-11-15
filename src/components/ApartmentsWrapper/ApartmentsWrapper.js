import React, {Fragment, useState, useEffect} from 'react';

import {ApartmentList, Menu} from '../../components';
import {getFullApartmentsList, filterApartmentList, handleUpdateApartmentsResult} from './helpers';

const fullApartmentList = getFullApartmentsList();

const ApartmentsWrapper = () => {
	const [apartmentList, setApartmentList] = useState(fullApartmentList);
	const [roomsAmount, setRoomsAmount] = useState(null);
	const [isSortByDate, setIsSortByDate] = useState(false);
	const [isShowSoldOutItems, setIsShowSoldOutItems] = useState(false);
	const [isShowFavouriteOnly, setIsShowFavouriteOnly] = useState(false);

	const handleChangeRoomsAmount = ({target}) => {
		const {value} = target;

		setRoomsAmount(value);
	};

	const handleChangeShowSoldOut = ({target}) => {
		const {checked} = target;

		setIsShowSoldOutItems(checked);
	};

	const handleChangeShowFavouriteOnly = ({target}) => {
		const {checked} = target;

		setIsShowFavouriteOnly(checked);
	};

	const handleChangeSortByDate = ({target}) => {
		const {checked} = target;

		setIsSortByDate(checked);
	};

	useEffect(() => {
		const updatedApartmentList = filterApartmentList(
			fullApartmentList,
			{roomsAmount, isSortByDate, isShowFavouriteOnly, isShowSoldOutItems}
		);

		setApartmentList(updatedApartmentList);
	}, [isSortByDate, isShowSoldOutItems, isShowFavouriteOnly, roomsAmount]);

	const menuHandlers = {
		handleUpdateApartmentsResult,
		handleChangeRoomsAmount,
		handleChangeShowFavouriteOnly,
		handleChangeShowSoldOut,
		handleChangeSortByDate,
	};

	const menuData = {
		isShowFavouriteOnly,
		isShowSoldOutItems,
		isSortByDate,
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