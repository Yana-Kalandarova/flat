const {
	updateApartment,
} = require('./utils');

const init = ({id, updatedData}) => {
	updateApartment(id, updatedData);
};

module.exports = init;