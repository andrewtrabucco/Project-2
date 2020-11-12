let queryURL = 'https://api.spoonacular.com/food/ingredients/search?query=' + foodID + '&apiKey=c1efb5fd0f5141858fc5b5f6a6b5ab85&includeNutrition=true';
let queryURL1 = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/' + food + '/information';

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
    let food = $("#findtext").val().trim();

    searchFood(inputFood);
});

