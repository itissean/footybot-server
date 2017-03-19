const utils = require('./utils');
const create = require('./create');

/**
 * Populates database with resources from football-data
 */
function getFootballData() {
  utils.requestResource('competitions')
  .then(competition => create.createCompetition(competition));
}

getFootballData();
