const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  listingId: Number,
  adult_price: Number,
  child_price: Number,
  cleaning_fee: Number,
  review_rating: Number,
  reviews: Number,
  discount: Boolean,
  booked_dates: Array
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.getListing = function(listingId, callback) {
  Listing.findOne({listingId: `${listingId}`}).
  exec(callback);
}

module.exports.updateListing = function(listingId, dates, callback) {
  Listing.findOneAndUpdate({listingId: `${listingId}`}, {$push: {booked_dates: dates}}).
  exec(callback);
}

module.exports.Listing = Listing;

