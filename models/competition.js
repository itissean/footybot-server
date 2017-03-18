const bookshelf = require('../bookshelf');

/**
 * Schema defined in migrations/competitions
 * @type {Object}
 */
const Competition = bookshelf.Model.extend({
  tableName: 'competitions',
});

module.exports = Competition;
