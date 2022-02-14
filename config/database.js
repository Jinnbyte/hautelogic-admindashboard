const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "tyke.db.elephantsql.com"),
      database: env("DATABASE_NAME", "pwxzwiev"),
      user: env("DATABASE_USERNAME", "pwxzwiev"),
      password: env("DATABASE_PASSWORD", "rUd-QZwP6UeS6LiBX-L3jbpEBRbi3d7M"),
      port: env.int("DATABASE_PORT", 5432),
     
    },
    debug: false,
  },
});
