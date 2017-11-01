const Assets = require('./app/controllers/assets');
const Report = require('./app/controllers/report');
const Plot = require('./app/controllers/plot');

module.exports = [
  { method: 'GET', path: '/', config: Report.report },
  { method: 'GET', path: '/report', config: Report.report },

  { method: 'GET', path: '/plot', config: Plot.plotview },
  { method: 'POST', path: '/plot', config: Plot.plot },
  {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
  },

];
