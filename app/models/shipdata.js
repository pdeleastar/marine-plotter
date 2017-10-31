'use strict';

const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    msi: String,
    x1: Number,
    y1: Number,
    x2: Number,
    y2: Number,
    x3: Number,
    y3: Number,
    x4: Number,
    y4: Number,
  });

const Ship = mongoose.model('Ship', shipSchema);
module.exports = Ship;
