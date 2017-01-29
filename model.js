var log = require('logger')('vehicle-fuels');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var make = Schema({
    title: String,
    has: {type: Object, default: {}},
    allowed: {type: Object, default: {}}
}, {collection: 'vehicle-fuels'});

make.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    }
});

make.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('VehicleFuels', make);