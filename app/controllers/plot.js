const Ship = require('../models/shipdata');
const marinetraffic = require('marinetraffic');
const marineUtils = require('./marineutils');

function readMsi(msi, request, reply) {
  marinetraffic(msi, function (err, result) {
        if (err) {
          marineUtils.reportError(err, msi);
          Ship.find({}).then(allShips => {
            reply.view('plot', {
              title: 'Ship Locations',
              ships: allShips,
              error: err.message,
            });
          });
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

exports.plot = {
  handler: function (request, reply) {
    let msi = request.payload.msi;
    readMsi(msi, request, reply);
  },
};

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