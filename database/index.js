const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/chairbnb';

const db = mongoose.connect(mongoUri);

module.exports = db;