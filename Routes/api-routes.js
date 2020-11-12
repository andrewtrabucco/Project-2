// Require models
let db = require("../models");

// Routes
module.exports = function (app) {

    // GET route to get all foods
    app.get("/api/foods", function (req, res) {
        db.Food.findAll({}).then(function (dbFood) {
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

    // PUT route for updating food
    app.put("/api/foods/:id", function (req, res) {
        db.Food.update({
            name: req.body.name,
            calories: req.body.calories,
            time: req.body.time
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbFood) {
            res.json(dbFood);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // DELETE route for deleting food
    app.delete("/api/foods/:id", function (req, res) {
        db.Food.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbFood) {
            res.json(dbFood);
        }).catch(function (err) {
            res.json(err);
        });
    });
}