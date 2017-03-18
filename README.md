# footybot-server
Server backend to process data pull from football-data.org for use with the footybot Reddit bot.

---

## Setup
Clone this repo to your computer and run `yarn install` to install dependencies.

You'll need to connect your database to knex by creating a file called `footybot.conf.js` and input the following:

```javascript
const config = {};

config.apiToken = 'ENTER FOOTBALL-DATA API KEY';
config.dbConfig = {
  host: 'ENTER HOST',
  user: 'ENTER USERNAME',
  password: 'ENTER PASSWORD',
  db: 'ENTER DATABASE NAME',
  charset: 'utf8'
}

module.exports = config;
```

You can also change the database used in knexfile.js. TODO: Breakout that whole configuration.

---

## Usage
Run `yarn migrate` to create the schemas in your database.
