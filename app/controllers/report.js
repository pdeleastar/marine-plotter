'use strict';

const marineUtils = require('./marineutils');
const Ship = require('../models/shipdata');
var marinetraffic = require('marinetraffic');

exports.report = {

  handler: function (request, reply) {
    Ship.find({}).then(allShips => {
      reply.view('report', {
        title: 'Ship Locations',
        ships: allShips,
      });
    });
  },

};

exports.clear = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Locations',
    });
  },

};
