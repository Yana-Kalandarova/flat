import axios from 'axios';

export const updateApartmentsResult = () => axios
	.get('/api/apartments').catch(err => console.log(`Error: ${err}`));
