module.exports = function (sequelize, DataTypes) {
    let moment = sequelize.define("moment", {
        name: DataTypes.STRING,
    });
    return moment;
};