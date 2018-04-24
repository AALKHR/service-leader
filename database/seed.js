const faker = require('faker');
const mongoose = require('mongoose');
const {db} = require('./index.js');
const {Listing} = require('./Listing.js');

const sampleData = []

for (var i = 1; i < 101; i++) {
  let listing = {
    listingId: i,
    adult_price: faker.commerce.price(100, 400),
    child_price: faker.commerce.price(25, 75),
    cleaning_fee: faker.commerce.price(0, 50),
    review_rating: (faker.random.number(4) + (faker.random.number(10) * 0.1)),
    reviews: faker.random.number(500),
    discount: faker.random.boolean(),
    booked_dates: [faker.date.recent(1), faker.date.recent(2)]
  }
  sampleData.push(listing);
}

const insertSampleData = function() {
  Listing.create(sampleData)
  .then(() => mongoose.disconnect())
  .catch((error) => console.log(error));
};

insertSampleData();