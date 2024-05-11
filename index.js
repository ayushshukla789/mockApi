const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint that never sends a response
app.get('/dummy-api', (req, res) => {
	res.status(200).send('Hello Ayush');
});

// Start the server
const server = app.listen(PORT, () => {
	console.log(`Dummy API server started at ${PORT}`);
});
