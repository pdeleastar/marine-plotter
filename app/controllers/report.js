'use strict';

const marineUtils = require('./marineutils');
var marinetraffic = require('marinetraffic');

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

}

exports.allShips = allShips;
