'use strict';

const marineUtils = require('./marineutils');
var marinetraffic = require('marinetraffic');
const Ship = require('../models/shipdata');

let count = 0;
let allShips = [];

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Ship Locations',
      ships: allShips,
    });
  },

};

exports.clear = {

  handler: function (request, reply) {
    allShips.length = 0;
    reply.view('report', {
      title: 'Locations',
      ships: allShips,
    });
  },

};

function readMsi(msi, request, reply) {
  marinetraffic(msi, function (err, result) {
        count++;
        if (err) {
          marineUtils.reportError(err, msi);
        } else {
          var shipCourse = marineUtils.getMsiDetails(result);
          shipCourse.msi = msi;
          allShips.push(shipCourse);
          if (count == 6) {
            reply.view('report', {
              title: 'Course List',
              ships: allShips,
            });
          }
        }
      }
  );
}

exports.refresh = {

  handler: function (request, reply) {
    count = 0;
    let msi = marineUtils.getMsiNumbersFromForm(request.payload);
    readMsi(msi[0], request, reply);
    readMsi(msi[1], request, reply);
    readMsi(msi[2], request, reply);
    readMsi(msi[3], request, reply);
    readMsi(msi[4], request, reply);
    readMsi(msi[5], request, reply);
  },

};

exports.map = {

  handler: function (request, reply) {
    reply.view('map', {
      title: 'Course List',
      ships: allShips,
    });
  },

};

exports.plot = {
  handler: function (request, reply) {
    let msi = request.payload.msi;
    readMsi1(msi, request, reply);
  },
};

function readMsi1(msi, request, reply) {
  marinetraffic(msi, function (err, result) {
        if (err) {
          marineUtils.reportError(err, msi);
        } else {
          var shipData = marineUtils.getMsiDetails(result);
          shipData.msi = msi;
          let shipObject = new Ship(shipData);
          shipObject.save().then(newShip => {
            reply.redirect('/plot');
          }).catch(err => {
            reply.redirect('/');
          });
        }
      }
  );
}

exports.plotview = {

  handler: function (request, reply) {
    Ship.find({}).then(allShips => {
      reply.view('plot', {
        title: 'Ship Locations',
        ships: allShips,
      });
    });
  },

};
