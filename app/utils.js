const request = require('request');
const configFile = require('../footybot.conf');

const TOKEN = configFile.apiToken;
const ROOT = 'http://api.football-data.org/v1/';

/**
 * Sets up http request options.
 * @type {Object}
 */
const options = {
  url: ROOT,
  headers: {
    'X-Auth-Token': TOKEN,
  },
};

/**
 * Utility functions for http request.
 * @type {Object}
 */
const Utils = {
  /**
   * Request the resource. Throws an error if the request fails.
   * @param  {string} path of request
   * @return {string} body of response
   */
  requestResource(path) {
    const requestOptions = Object.assign({}, options);
    requestOptions.url += path;
    request.get(requestOptions, (err, res, body) => {
      if (err) {
        throw err;
      } else {
        return JSON.parse(body);
      }
    });
  },
};

module.exports = Utils;
