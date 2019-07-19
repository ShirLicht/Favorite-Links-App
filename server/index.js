const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initialize the app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Hadle requests
const links = require('./routes/links');

app.use('/', links);

//Variable for the server port (localhost)
const port =  5000;

//Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));