// tslint:disable-next-line:no-var-requires
const fs = require("fs");
// tslint:disable-next-line:no-var-requires
const path = require("path");

// tslint:disable-next-line:no-var-requires
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// tslint:disable-next-line:no-var-requires
const config = require(__dirname + "/../config/config.json")[env];
const db: any = {};

let sequelize;
//console.log("database:::", config.database);

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
const modals = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );
});

modals.forEach((file) => {
  console.log("test1", file);
  const model = require(path.join(__dirname, file))(
    sequelize,
    Sequelize.DataTypes
  );
  console.log("modelssss::", model);
  db[model.name] = model;
  console.log(db[model.name]);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
