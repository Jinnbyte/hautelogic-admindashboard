const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      database: env("DATABASE_NAME", "hautelogicdb"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "admin"),
      port: env.int("DATABASE_PORT", 3306),
    },
    debug: false,
  },
});
