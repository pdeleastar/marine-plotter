'use strict';

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Locations',
    });
  },

};
