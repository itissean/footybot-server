const dbConfig = require('./footybot.conf').dbConfig;

module.exports = {
  client: 'mariasql',
  connection: dbConfig,
  useNullAsDefault: true,
};
