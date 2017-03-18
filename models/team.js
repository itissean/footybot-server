const bookshelf = require('../bookshelf');

const Team = bookshelf.Model.extend({
  tableName: 'teams',
});

module.exports = Team;
