const liveServer = require('live-server');

const params = {
  port: 3000,
  root: './build',
  logLevel: 1,
};

liveServer.start(params);
