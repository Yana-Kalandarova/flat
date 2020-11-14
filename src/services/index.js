import axios from 'axios';

export const updateApartmentsResult = () => axios
	.get('/api/apartments').catch(err => console.log(`Error: ${err}`));

export const addApartmentToFavourite = (id, updatedData) => axios
	.post(`/api/apartment/${id}`, {id, updatedData}).catch(err => console.log(`Error: ${err}`));
