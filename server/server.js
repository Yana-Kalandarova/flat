const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const getFlatsFunc = require('./getFlats');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/apartments', async(req, res) => {
	const result = await getFlatsFunc();
	res.send({express: 'get flats is successful', result});
});