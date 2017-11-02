const Ship = require('../models/shipdata');
const marinetraffic = require('marinetraffic');
const marineUtils = require('./marineutils');

let latestShip = null;

function readMsi(msi, request, reply) {
  marinetraffic(msi, function (err, result) {
        if (err) {
          marineUtils.reportError(err, msi);
          Ship.find({}).then(allShips => {
            reply.view('plot', {
              title: 'marine.art',
              ships: allShips,
              error: err.message,
            });
          });
        } else {
          var shipData = marineUtils.getMsiDetails(result);
          latestShip = shipData;
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
    if (request.payload.msi == '') {
      console.log('error');
      reply.redirect('/plot');
    } else {
      let msi = request.payload.msi;
      readMsi(msi, request, reply);
    }
  },
};

exports.plotview = {

  handler: function (request, reply) {
    Ship.find({}).then(allShips => {
      reply.view('plot', {
        title: 'marine.art',
        ships: allShips,
        latestShip: latestShip,
      });
    });
  },

};
