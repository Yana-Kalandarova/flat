const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const getApartmentsFunc = require('./getApartments');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/apartments', async(req, res) => {
	const result = await getApartmentsFunc();
	res.send({express: 'apartments have been got successfully', result});
});