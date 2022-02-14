const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "tyke.db.elephantsql.com"),
      database: env("DATABASE_NAME", "busdkgwp"),
      user: env("DATABASE_USERNAME", "busdkgwp"),
      password: env("DATABASE_PASSWORD", "S86bZlJcAAZVkj7sI5QDJCmNEKxTRl_o"),
      port: env.int("DATABASE_PORT", 5452),
     
    },
    debug: false,
  },
});
