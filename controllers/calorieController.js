var express = require("express");

var router = express.Router();

// Import the model (index.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   db.Food.findAll({}).then(function(response){
//     var calorieData = {
//       calories: data
//     };
//     console.log(calorieData);
//     res.render("index", calorieData);
//   })
    
//   });



// router.post("/api/calories", function(req, res) {
//   calories.create([
//     "foodName", calories
//   ], [
//     req.body.foodName, req.body.calories
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/calories/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   calories.update({
//     calories: req.body.calories
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/calories/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   calories.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
