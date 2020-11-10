
let unirest = require("unirest");
let req = unirest("GET", "https://api.spoonacular.com/food/ingredients/search?query=" + foodID + "&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true");
let req1 = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/" + food + "/information");


req.query({
	"amount": "100",
	"unit": "gram"
});
req1.query({
	"amount": "100",
	"unit": "gram"
});

req.headers({
	"x-rapidapi-key": "c1efb5fd0f5141858fc5b5f6a6b5ab85",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

// RapidAPI API Call

let queryURL = "https://api.spoonacular.com/food/ingredients/search?query=apple&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true";

function searchFood() {

    $.ajax({
        url: queryURL,
        method: "GET",     
    }).then(function (response) {
        console.log(response);
    });
}

// Search Button Functionality (Imputs Text and Calls searchFood Function)
$("#searchButton").on("click", function () {
    event.preventDefault();
    let inputFood = $("#findtext").val().trim();

    searchFood(inputFood);
});

