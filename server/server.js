const express = require('express');
const bodyParser = require('body-parser');

const Listing = require('../database/Listing.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/reservation/:listingId')

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});