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
 * @module utils
 */
const Utils = {
  /**
   * Request the resource. Throws an error if the request fails.
   * @param  {string} path of request
   * @return {string} body of response
   */
  requestResource(path) {
    return new Promise((resolve, reject) => {
      const requestOptions = Object.assign({}, options);
      requestOptions.url += path;
      request.get(requestOptions, (err, res, body) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(JSON.parse(body));
        }
      });
    });
  },
};

module.exports = Utils;
