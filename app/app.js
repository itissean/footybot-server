const request = require('request');

const TOKEN = require('../footybot.conf').apiToken;
const ROOT = 'http://api.football-data.org/v1/';

const options = {
  url: ROOT,
  headers: {
    'X-Auth-Token': TOKEN,
  },
};

/**
 * Request the resource. Throws an error if the request fails.
 * @param  {string} path of request
 * @return {string} body of response
 */
function requestResource(path) {
  const requestOptions = Object.assign({}, options);
  requestOptions.url += path;
  request.get(requestOptions, (err, res, body) => {
    if (err) {
      throw err;
    } else {
      return JSON.parse(body);
    }
  });
};

createCompetitions();
