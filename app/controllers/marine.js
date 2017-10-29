'use strict';

const marineUtils = require('./marineutils');

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Ship Locations',
    });
  },

};

exports.refresh = {

  handler: function (request, reply) {
    let msi = marineUtils.getMsiNumbersFromForm(request.payload);
    reply.view('report', {
      title: 'Ship Locations',
    });
  },

};
