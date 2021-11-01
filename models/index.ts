// tslint:disable-next-line:no-var-requires
const fs = require("fs");
// tslint:disable-next-line:no-var-requires
const path = require("path");
interface ImportedModel {
  name: string;
}
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

// let db: any = {}

// const modelPath = `${process.cwd()}/models`;
// console.log("ok",modelPath);

// fs.readdirSync(modelPath).forEach((file: String) => {
//   if (file !== 'index.js' && path.extname(file) === '.ts') {
//     let model: ImportedModel = sequelize.import(path.join(modelPath, file))
//     console.log(model);

//     db[model.name] = model
//   }
// })

// Object.keys(db).forEach((modelName: string) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db)
//   }
const modals = fs.readdirSync(__dirname).filter((file) => {
  return (
    "dist" + file.indexOf(".") !== "" &&
    file !== basename &&
    file.slice(-3) === ".ts"
  );
});
//console.log(modals);

modals.forEach((file) => {
  //console.log("test1", file);
  // const model = require(path.join(__dirname, file))(
  //   sequelize,
  //   Sequelize.DataTypes
  // );
  //console.log(file);

  let modelName: ImportedModel = require(`../models/${file}`)(
    sequelize,
    Sequelize.DataTypes
  );
  //console.log("modelssss::", modelName);
  db[modelName.name] = modelName;
  //console.log(db[modelName.name]);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
