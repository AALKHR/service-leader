const mongoose = require('mongoose');
// const mongoUri = 'mongodb://172.17.0.2/chairbnb';
const mongoUri = 'mongodb://127.0.0.1/chairbnb';
// const redisClient = require('redis').createClient;
// const redis = redisClient(6379, 'localhost');

const db = mongoose.connect(mongoUri);

module.exports = db;