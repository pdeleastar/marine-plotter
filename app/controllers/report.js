'use strict';

const marineUtils = require('./marineutils');
const Ship = require('../models/shipdata');
var marinetraffic = require('marinetraffic');

exports.report = {

  handler: function (request, reply) {
    Ship.find({}).then(allShips => {
      reply.view('report', {
        title: 'marine.data',
        ships: allShips,
      });
    });
  },

};


