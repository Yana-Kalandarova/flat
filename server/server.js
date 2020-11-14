const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const getApartmentsFunc = require('./getApartments');
const updateApartmentFunc = require('./updateApartment');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/apartments', async(req, res) => {
	const result = await getApartmentsFunc();

	res.send({express: 'apartments have been got successfully', result});
});

app.post('/api/apartment/:id', async(req, res) => {
	const {body: {updatedData}, params: {id}} = req;
	const result = await updateApartmentFunc({id, updatedData});
	
	res.send({express: 'apartment have been updated', result});
});