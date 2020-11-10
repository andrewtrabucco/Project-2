// let queryURL2 = "https://api.spoonacular.com/food/ingredients/search?query=" + foodID + "&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true";


// RapidAPI API Call

// Search Button Functionality (Imputs Text and Calls searchFood Function)
$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let food = $("#findtext").val().trim();
    let queryURL = "https://api.spoonacular.com/food/ingredients/search?query=" + food + "&sort=calories&sortDirection=desc&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        debugger;
        console.log(response);
    });

});


