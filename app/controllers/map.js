const allShips = require('./report').allShips;

exports.map = {

  handler: function (request, reply) {
    reply.view('map', {
      title: 'Course List',
      ships: allShips,
    });
  },

};
