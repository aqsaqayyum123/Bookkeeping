'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expensebreakdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.expenses, {
        foreignKey: 'expense_id',
      });
    }
  };
  Expensebreakdown.init({
    category: DataTypes.ENUM,
    splittype: DataTypes.ENUM,
    reminder: DataTypes.ARRAY(DataTypes.STRING),
    repeates: DataTypes.ENUM,
    notes: DataTypes.STRING,
    expense_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expensebreakdown',
  });
  return Expensebreakdown;
};