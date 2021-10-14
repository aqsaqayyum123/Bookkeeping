import { Sequelize } from "sequelize";

const database = process.env.DB_NAME as string;
const username = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const password = process.env.DB_PASSWORD;

const sequelizeConnection = new Sequelize(database, username, password, {
  host: dbHost,
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default sequelizeConnection;
