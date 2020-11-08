const {
	getResponse,
	saveNewResponseToFile,
	updateApartmentsData,
} = require('./utils');

const init = async () => {
	const response = await getResponse();

	saveNewResponseToFile(response);
	updateApartmentsData(response);
};

module.exports = init;