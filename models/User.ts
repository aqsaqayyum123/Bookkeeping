//import { options } from "joi";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public uuid!: string;
    public name!: string;
    public email!: string;
    public mobile!: number;
    public password!: string;

    static associate(models) {
      // define association here
      // User.hasMany(models.Groups, {
      //   foreignKey: "user_id",
      //   as: "groups",
      // });
      // User.(models.Groups, {
      //   foreignKey: "user_id",
      //   as: "groups",
      // });
      //  User.belongsToMany(models.ScheduleQuiz, {
      //    through: "UserScheduleQuiz",
      //    foreignKey: "user_id",
      //    as: "schedules_quizzes",
      //  });
      //this.hasMany(models.Friends);
      // this.hasMany(models.Expenses);
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      // hooks: {
      //   beforeValidate: (Users, options) => {
      //     Users.name = "i am hook";
      //   },
      // },
    }
  );
  // Users.addHook("beforeValidate", "cutomName", (Users, options) => {
  //   Users.name = "new hook";
  // });
  // Users.afterValidate("myHook", (Users, options) => {
  //   Users.name = "new hook after";
  // });
  return User;
};

//export default User;

// import { sequelize as sequelizeInstance } from "../../db";
// import { Model, DataTypes } from "sequelize";

// const config = {
//   tableName: "categories",
//   sequelize: sequelizeInstance,
// };

// class Category extends Model {
//   public id!: number;
//   public title!: string;
//   public color!: number;
//   public categoryId!: number;
// }
// Category.init(
//   {
//     id: {
//       primaryKey: true,
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     title: DataTypes.STRING,
//     color: DataTypes.INTEGER,
//   },
//   config
// );

// export default Category;
