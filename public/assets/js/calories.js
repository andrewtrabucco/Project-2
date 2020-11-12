// let queryURL2 = "https://api.spoonacular.com/food/ingredients/search?query=" + foodID + "&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true";




// Search Button Functionality (Imputs Text and Calls searchFood Function)
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
        console.log(response.results[0]);
        console.log(response.results[0].name);
        console.log(response.results[0].id);
        console.log(response.results[0].image);
        // console.log(response[0].name);
        // console.log(repsonse[0].id);
        // console.log(response[0].image);























    });

});


