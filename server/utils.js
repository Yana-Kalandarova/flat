const fs = require('fs');
const axios = require('axios');

const {
	LOCALE,
	REQUEST_URL,
	RESPONSES_FOLDER_PATH,
	APARTMENTS_FILE_PATH
} = require('./constants');

function replacer(key, value) {
	const originalObject = this[key];

	return originalObject instanceof Map
		? {
			dataType: "Map",
			value: [...originalObject],
		}
		: value
}

const reviver = (key, value) => isMap(value) ? new Map(value.value) : value;

const isMap = (value) =>  typeof value === 'object' && value !== null && value.dataType === 'Map';

const stringifyData = (data) => {
	return JSON.stringify(data, replacer, 2);
};

const parseData = (data) => JSON.parse(data, reviver);

const getReadableDate = () => {
	const date = new Date();
	const currYear = date.toLocaleDateString(LOCALE, {year: 'numeric'});
	const currMonth = date.toLocaleDateString(LOCALE, {month: 'short'});
	const currDay = date.toLocaleDateString(LOCALE, {day: 'numeric'});

	return `${currDay}_${currMonth}_${currYear}`;
};

const updateApartmentsFile = (updatedData) => fs.writeFileSync(APARTMENTS_FILE_PATH, stringifyData(updatedData));

const getApartmentFullPrice = ({amount, currency}) => `${Math.round(amount)} ${currency}`;

const convertId = (id) => id.toString();

const getUpdatedPriceHistory = (prevPriceHistory, fullPrice) => {
	const date = new Date();
	const readableDate = date.toISOString();
	const updatedPriceHistory = new Map(prevPriceHistory);

	updatedPriceHistory.set(readableDate, fullPrice);

	return updatedPriceHistory;
};

const updateApartmentPriceHistory = (item, prevApartments) => {
	const {id, price} = item;
	const fullPrice = getApartmentFullPrice(price);
	const {priceHistory} = prevApartments.get(convertId(id));
	const lastPrice = Array.from(new Map(priceHistory).values()).pop();

	return lastPrice === fullPrice
		? {
			...item,
			priceHistory
		}
		: {
			...item,
			priceHistory: getUpdatedPriceHistory(priceHistory, fullPrice)
		};
};

const updateExistingApartment = (item, prevApartments) => {
	const updatedApartment = updateApartmentPriceHistory(item, prevApartments);

	return {
		...updatedApartment,
		isActual: true
	};
};

const createNewApartment = (item) => {
	const {price} = item;
	const fullPrice = getApartmentFullPrice(price);

	return ({
		...item,
		isActual: true,
		priceHistory: getUpdatedPriceHistory(null, fullPrice)
	})
};

const getUpdatedApartment = (item, prevApartments) => {
	const {id} = item;

	return prevApartments.has(convertId(id))
		? updateExistingApartment(item, prevApartments)
		: createNewApartment(item);
};

const getUpdatedApartmentsData = (fetchedApartments, prevApartments) => fetchedApartments
	.reduce((updatedApartments, item) => {
		const {id} = item;
		const apartmentId = convertId(id);
		const updatedApartmentItem = getUpdatedApartment(item, prevApartments);

		updatedApartments.set(apartmentId, updatedApartmentItem);

		return updatedApartments;
	}, prevApartments);

exports.getResponse = async() => await axios.get(REQUEST_URL).then((res) => res.data);

exports.saveNewResponseToFile = (response) => {
	const readableDate = getReadableDate();
	const newResponseFilePath = `${RESPONSES_FOLDER_PATH}/${readableDate}.json`;

	fs.writeFileSync(newResponseFilePath, stringifyData(response), (err) => {
		console.log(err);
	});
};

exports.updateApartmentsData = (response) => {
	const apartmentsFileData = fs.readFileSync(APARTMENTS_FILE_PATH);
	const prevApartments = parseData(apartmentsFileData);
	const {apartments: fetchedApartments} = response;
	const updatedApartmentsData = getUpdatedApartmentsData(fetchedApartments, prevApartments);

	updateApartmentsFile(updatedApartmentsData);
};

exports.updateApartment = (id, updatedData) => {
	const apartmentsFileData = fs.readFileSync(APARTMENTS_FILE_PATH);
	const apartments = parseData(apartmentsFileData);
	const apartmentItem = apartments.get(id);
	const updatedApartmentItem = {
		...apartmentItem,
		...updatedData,
	};

	apartments.set(id, updatedApartmentItem);
	updateApartmentsFile(apartments);
};
