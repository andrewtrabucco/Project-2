module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
      calories: DataTypes.STRING
    });
    return Food;
  };
  