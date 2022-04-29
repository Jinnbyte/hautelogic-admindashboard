const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST", "jinnbyte-staging.com"),
        database: env("DATABASE_NAME", "jinnbyte_hautelogicdb"),
        user: env("DATABASE_USERNAME", "jinnbyte_hautelogicuser"),
        password: env("DATABASE_PASSWORD", "-R^ioH6JmoB9"),
        port: env.int("DATABASE_PORT", 3306),
        ssl: false,
      },
      debug: false,
    },
  };
};
