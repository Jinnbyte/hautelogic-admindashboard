const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "hautelogic"),
      user: env("DATABASE_USERNAME", "db_user"),
      password: env("DATABASE_PASSWORD", "admin"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
     
    },
    debug: false,
  },
});