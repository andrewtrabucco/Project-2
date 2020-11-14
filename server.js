// Require Express 
let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

<<<<<<< Updated upstream
var db = require("./models")



// Serve static content for the app from the "public" directory in the application directory.
=======
// Serve static content for the app from the "public" directory in the application directory
>>>>>>> Stashed changes
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< Updated upstream
// Import routes and give the server access to them.
=======
// Import routes and give the server access to them
let routes = require("./controllers/calorieController.js");
>>>>>>> Stashed changes
require("./Routes/html-routes.js")(app);
require("./Routes/api-routes.js")(app);


<<<<<<< Updated upstream
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
=======
// Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
>>>>>>> Stashed changes
});
