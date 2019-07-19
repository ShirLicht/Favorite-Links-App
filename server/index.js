const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initialize the app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const links = require('./routes/links');

app.use('/', links);

//Variable for the server port (erroku / localhost)
const port = process.env.PORT || 5000;

//Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));