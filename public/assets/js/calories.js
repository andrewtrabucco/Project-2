let totalCalories = [];
let totalBurnedCalories = [];

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
});

// Search Button Functionality (Imputs text and calls searchFood function)
$("#searchButton").on("click", function (event) {
    event.preventDefault();
    $(".food-list").empty();
    let food = $("#foodTextEntry").val().trim();

    // console.log(food);
    let queryURL = "https://api.spoonacular.com/food/ingredients/search?query=" + food + "&sort=calories&sortDirection=desc&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85";

    // Rapid API Call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);

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
            $("#caloriesIn").val("");
            let foodId = $(event.target).attr("id");
            let queryURLtwo = "https://api.spoonacular.com/food/ingredients/" + foodId + "/information?amount=1&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true";

            $.ajax({
                url: queryURLtwo,
                method: "GET",
            }).then(function (id) {
                console.log(id);
                console.log(id.nutrition.nutrients[0])

                let foodChosen = {}
                foodChosen.name = (id.name);
                foodChosen.calories = (id.nutrition.nutrients[0].amount);
                console.log(id.name);
                console.log(id.nutrition.nutrients[0].amount);


                totalCalories.push(parseInt(foodChosen.calories));
                $("#caloriesIn").text(totalCalories.reduce((a, b) => a + b, 0));

                
                $.post("api/foods", foodChosen).then(function (response) {
                    console.log(response);
                });
            });
        });
    });
    $("#foodTextEntry").val("");
});


$("#customButton").on("click", function (event) {
    var foodItem = {}
    foodItem.name = $("#customFoodTextEntry").val();
    foodItem.calories = parseInt($("#enterCustomCalories").val());


    totalCalories.push(foodItem.calories);
    $("#caloriesIn").text(totalCalories.reduce((a, b) => a + b, 0));


    $.post("api/foods", foodItem).then(function (response) {
        $.ajax({
            url: "/api/foods",
            method: "POST"
        }).then(function (response) {
            console.log(response);
        });
    });
    $("#customFoodTextEntry").val("");
    $("#enterCustomCalories").val("");
});


$("#caloriesBurnedButton").on("click", function (event) {
    var burnedCalories = {}
    burnedCalories.calories = parseInt($("#enterBurnedCalories").val());


    totalBurnedCalories.push(burnedCalories.calories);
    $("#caloriesOut").text(totalBurnedCalories.reduce((a, b) => a + b, 0));


    $.post("api/exercise", burnedCalories).then(function (response) {
        console.log(response);
    });
    $("#enterBurnedCalories").val("");
});

