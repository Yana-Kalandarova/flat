import {updateApartmentsResult} from '../../services';
import {ROOMS_AMOUNT_MAP} from '../../constants';

export const handleUpdateApartmentsResult = async() => {
	await updateApartmentsResult();
};

export const filterByRoomsAmount = (list, roomsAmount) => roomsAmount
	? list.filter(item => {
		const {number_of_rooms: numberOfRoom} = item;
		const {matchFunc} = ROOMS_AMOUNT_MAP.find(item => item.value === +roomsAmount);

		if (matchFunc) {
			return matchFunc(numberOfRoom);
		}

		return numberOfRoom === +roomsAmount
	})
	: list;