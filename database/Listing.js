const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  _id: Number,
  adult_price: Number,
  child_price: Number,
  cleaning_fee: Number,
  review_rating: Number,
  discount: Boolean,
  booked_dates: Array
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;

