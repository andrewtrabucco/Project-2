module.exports = function(sequelize, DataTypes) {
    let Meal = sequelize.define("Meal", {
      day: DataTypes.STRING,
      foodItem: DataTypes.STRING
    });
    return Meal;
  };
  