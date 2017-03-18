const request = require('request');

const TOKEN = require('../footybot.conf').apiToken;
const ROOT = 'http://api.football-data.org/v1/';

const options = {
  url: ROOT,
  headers: {
    'X-Auth-Token': TOKEN,
  },
};

function requestResource(path) {
  const compOptions = Object.assign({}, options);
  compOptions.url += 'path';
  request.get(compOptions, (err, res, body) => {
    if (err) {
      throw err;
    } else {
      return JSON.parse(body);
    }
  });
};

createCompetitions();
