import { Sequelize } from "sequelize";

// const database = process.env.DB_NAME as string;
// const username = process.env.DB_USER as string;
// const dbHost = process.env.DB_HOST;
// const password = process.env.DB_PASSWORD;

// DB_NAME = bookkeeping;
// DB_USER = postgres;
// DB_HOST = localhost;
// DB_DRIVER = postgres;
// DB_PASSWORD = 12345;

const sequelizeConnection = new Sequelize("bookkeeping", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default sequelizeConnection;
