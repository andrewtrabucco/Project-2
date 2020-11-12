module.exports = function(sequelize, DataTypes) {
    let Food = sequelize.define("Food", {
      name: DataTypes.STRING,
      calories: DataTypes.STRING,
      time: DataTypes.STRING
    });
    return Food;
  };
  