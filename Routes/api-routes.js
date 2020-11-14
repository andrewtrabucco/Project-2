// Require models
let db = require("../models");

const sequelize = require('sequelize');

// Routes
module.exports = function (app) {

    // GET route to get all foods
    app.get("/api/foods/current", function (req, res) {
        db.Food.findAll({
            where: {
                $and: [
                    sequelize.where(
                        sequelize.fn('DATE', sequelize.col('created_at')),
                        sequelize.literal('CURRENT_DATE'),
                    )
                ]
            }
        }).then(function (dbFood) {
            res.json(dbFood);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // POST route for creating new food
    app.post("/api/foods", function (req, res) {
        db.Food.create({
            name: req.body.name,
            calories: req.body.calories,
            time: req.body.time
        }).then(function (dbFood) {
            res.json(dbFood);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // GET route to get all exercises
    app.post("/api/exercises/current", function (req, res) {
        db.Exercise.findAll({
            where: {
                date: req.body.created_at
            }
        }).then(function (dbExercise) {
            res.json(dbExercise);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // POST route for creating new exercise
    app.post("/api/exercises", function (req, res) {
        db.Exercise.create({
            name: req.body.name,
            calories: req.body.calories
        }).then(function (dbExercise) {
            res.json(dbExercise);
        }).catch(function (err) {
            res.json(err);
        });
    });
}