const Marine = require('./app/controllers/marine');
const Assets = require('./app/controllers/assets');

module.exports = [
  { method: 'GET', path: '/', config: Marine.report },
  { method: 'GET', path: '/report', config: Marine.report },
    { method: 'GET', path: '/plot', config: Marine.plotview },
  { method: 'POST', path: '/refresh', config: Marine.refresh },
  { method: 'GET', path: '/clear', config: Marine.clear },
  { method: 'GET', path: '/map', config: Marine.map },
    { method: 'POST', path: '/plot', config: Marine.plot },
  {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
  },

];
