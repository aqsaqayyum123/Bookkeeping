'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.user, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.friends, {
        foreignKey: 'friend_id',
      });
      this.belongsTo(models.groups, {
        foreignKey: 'group_id',
      });
      this.hasOne(models.expensebreakdown);
    }
  };
  Expenses.init({
    description: DataTypes.STRING,
    email: DataTypes.ARRAY(DataTypes.STRING),
    totalamount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    isgroup: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    friend_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expenses',
  });
  return Expenses;
};