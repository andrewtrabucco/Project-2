module.exports = function (sequelize, DataTypes) {
    let burnedCalories = sequelize.define("burnedCalories", {
        calories: DataTypes.STRING,
    });
    return burnedCalories;
};
