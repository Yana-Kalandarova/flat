import apartmentsResult from '../../data/apartments';
import {updateApartmentsResult} from '../../services';
import {ROOMS_AMOUNT_MAP} from '../../constants';

export const getFullApartmentsList = () => Array.from(new Map(apartmentsResult.value).values());

export const handleUpdateApartmentsResult = async() => {
	await updateApartmentsResult();
};

const isRoomsAmountFilterApplied = (item, roomsAmount) => {
	if (!roomsAmount) {
		return true
	}

	const {number_of_rooms: numberOfRoom} = item;
	const {matchFunc} = ROOMS_AMOUNT_MAP.find(item => item.value === +roomsAmount);

	if (matchFunc) {
		return matchFunc(numberOfRoom);
	}

	return numberOfRoom === +roomsAmount;
};

const isShowSoldOutFilterApplied = (item, isShowSoldOutItems) => {
	if(isShowSoldOutItems) {
		return true;
	}

	const {isActual} = item;

	return isActual;
};

const isShowFavouriteOnlyFilterApplied = (item, isShowFavouriteOnly) => {
	if (isShowFavouriteOnly) {
		return item.isFavourite;
	}

	return true;
};

export const filterApartmentList = (list, {roomsAmount, isShowFavouriteOnly, isShowSoldOutItems}) => list.filter(item => (
	isRoomsAmountFilterApplied(item, roomsAmount) &&
	isShowSoldOutFilterApplied(item, isShowSoldOutItems) &&
	isShowFavouriteOnlyFilterApplied(item, isShowFavouriteOnly)
));