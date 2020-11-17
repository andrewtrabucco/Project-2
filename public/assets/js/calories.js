$(document).ready(function () {
  function todaysDate() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("Date").innerHTML = n;
  }
  todaysDate();
  // Search Button Functionality (Imputs text and calls searchFood function)
  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    let food = $("#foodTextEntry").val().trim();

    // console.log(food);
    let queryURL =
      "https://api.spoonacular.com/food/ingredients/search?query=" +
      food +
      "&sort=calories&sortDirection=desc&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85";

    // Rapid API Call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.results[0]);
      console.log(response.results[0].name);
      console.log(response.results[0].id);
      console.log(response.results[0].image);

      for (let i = 0; i < response.results.length; i++) {
        let li = $("<li>");
        let button = $("<button class='button is-primary'>Add Food</button>");
        li.text(response.results[i].name);
        button.attr("id", response.results[i].id);
        li.append(button);
        $(".food-list").append(li);
      }
      $(".button").on("click", function (event) {
        event.preventDefault();
        let foodId = $(event.target).attr("id");
        let queryURLtwo =
          "https://api.spoonacular.com/food/ingredients/" +
          foodId +
          "/information?amount=1&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true";

        $.ajax({
          url: queryURLtwo,
          method: "GET",
        }).then(function (id) {
          console.log(id);
          console.log(id.nutrition.nutrients[0]);
        });
      });
    });
  });

  $("#customButton").on("click", function (event) {
    var foodItem = {};
    foodItem.name = $("#customFoodTextEntry").val();
    foodItem.calories = $("#enterCustomCalories").val();

    $.post("api/foods", foodItem).then(function (response) {
      console.log(response);
    });
  });

  $("#caloriesBurnedButton").on("click", function (event) {
    var burnedCalories = {};
    burnedCalories.calories = $("#enterBurnedCalories").val();

    $.ajax({
      url: "/api/foods",
      method: "POST",
    }).then(function (response) {
      console.log(response);
    });
  });

//   $("#Date").html("<h2" + "(" + moment().format("l") + ")" + " " + "</h2>");
//   console.log("Day of week: " + moment().day);
//   // $("#moment").text("Date: " + moment.now(Date)) {
  //     // var moment = {}
  //     moment.calories = $("#moment").Date();

  //     $.ajax({
  //         url: "/models/moment",
  //         method: "GET"
  //     }).then(function(response) {
  //         console.log(response);
  //     });
  // }

  // const moment = require('moment');
  //     let moment = {}
  //     moment.calories = $("#enterMoment").val();

  //     $.ajax({
  //         url:
  //     })
});
