module.exports = function(sequelize, DataTypes) {
    var Meal = sequelize.define("Meal", {
      day: DataTypes.STRING,
      foodItem: DataTypes.STRING
    });
    return Meal;
  };
  