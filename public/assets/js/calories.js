
// Search Button Functionality (Imputs text and calls searchFood function)
$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let food = $("#foodTextEntry").val().trim();

    // console.log(food);
    let queryURL = "https://api.spoonacular.com/food/ingredients/search?query=" + food + "&sort=calories&sortDirection=desc&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85";
    
    // Rapid API Call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        // console.log(response.results[0]);
        // console.log(response.results[0].name);
        // console.log(response.results[0].id);
        // console.log(response.results[0].image);


        for (let i = 0; i < response.results.length; i++) {
            let li = $("<li>");
            let button = $("<button class='food-button button is-primary'>Add Food</button>");
            li.text(response.results[i].name);
            button.attr("id", response.results[i].id);
            li.append(button);
            $(".food-list").append(li);
            
        }
        $(".food-button").on("click", function (event) {
            event.preventDefault();
            let foodId = $(event.target).attr("id");
            let queryURLtwo = "https://api.spoonacular.com/food/ingredients/" + foodId + "/information?amount=1&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true"

            $.ajax({
                url: queryURLtwo,
                method: "GET",
            }).then(function (id) {
                console.log(id);
                console.log(id.nutrition.nutrients[0])

                var foodChosen = {}
                foodChosen.name = (id.name);
                foodChosen.calories = (id.nutrition.nutrients[0].amount);
                console.log(id.name);
                console.log(id.nutrition.nutrients[0].amount);

                $.post("api/foods", foodChosen).then(function (response)    {
                    console.log(response);
                });
            });

            
        });
    });
});

$("#customButton").on("click", function (event) {
    var foodItem = {}
    foodItem.name = $("#customFoodTextEntry").val();
    foodItem.calories = $("#enterCustomCalories").val();

    $.post("api/foods", foodItem).then(function (response) {
    $.ajax({
        url: "/api/foods",
        method: "POST"
    }).then(function (response) {
        console.log(response);
    });
});

$("#caloriesBurnedButton").on("click", function (event) {
    var burnedCalories = {}
    burnedCalories.calories = $("#enterCaloriesBurned").val();
    $.post("api/exercise", burnedCalories).then(function (response)    {
        console.log(response);
    });
});




$("#Date").html("<h2" + "(" + moment().format('l') + ")" + " " + "</h2>");
// $("#moment").text("Date: " + moment.now(Date)) {
//     // var moment = {}
//     moment.calories = $("#moment").Date();
    
    // $.ajax({
    //     url: "/models/moment",
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    // });
// };
// $("#tempF").text("Temperature: " + Math.round(tempF) + " °F");

// const moment = require('moment');
//     let moment = {}
//     moment.calories = $("#enterMoment").val();

//     $.ajax({
//         url: 
//     })

// console.log("Day of week: " + now.weekday());
