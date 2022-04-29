const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: "jinnbyte-staging.com",
      port: 3306,
      database: "jinnbyte_hautelogicdb",
      user: "jinnbyte_hautelogicuser",
      password: "D8EY1vnESjTk",
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

