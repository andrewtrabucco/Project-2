var express = require("express");

var router = express.Router();

// Import the model (index.js) to use its database functions.
var calorie = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  calorie.all(function(data) {
    var hbsObject = {
      calories: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/calories", function(req, res) {
  calorie.create([
    "foodName", calories
  ], [
    req.body.foodName, req.body.calories
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/calories/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  calorie.update({
    calories: req.body.calories
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/calories/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  calorie.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
