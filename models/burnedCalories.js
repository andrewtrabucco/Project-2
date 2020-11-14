module.exports = function (sequelize, DataTypes) {
    let burnedCalories = sequelize.define("burnedCalories", {
        calories: DataTypes.String,
    });
    return burnedCalories;
};
