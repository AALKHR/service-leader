const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Listing = require('../database/Listing.js');

const app = express();
const port = 3009;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/reservation/:listingId', function(req, res) {
  Listing.getListing(req.params.listingId, function(error, data) {
    if (error) {
      res.status(500);
      res.send(error);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.post('/reservation/:listingId', function(req, res) {
  // console.log(req.body);
  Listing.updateListing(req.params.listingId, req.body.dates, function(error, data) {
    if (error) {
      res.status(500);
      res.send(error);
    } else {
      res.send(data);
    }
  });
})

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});