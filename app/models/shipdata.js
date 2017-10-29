'use strict';

const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    latlng: Object
});

const Ship = mongoose.model('Ship', shipSchema);
module.exports = Ship;