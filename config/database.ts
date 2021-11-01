import { Sequelize } from "sequelize";

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
