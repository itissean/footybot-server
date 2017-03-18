const bookshelf = require('../bookshelf');

/**
 * Schema defined in migrations/teams
 * @type {Object}
 */
const Team = bookshelf.Model.extend({
  tableName: 'teams',
});

module.exports = Team;
