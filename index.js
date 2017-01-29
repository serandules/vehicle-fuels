var mongoose = require('mongoose');

var model;

try {
    model = mongoose.model('VehicleFuels') || require('./model');
} catch (e) {
    model = require('./model');
}

module.exports = model;