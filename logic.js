let cityName = [];

$(document).ready(function() {

  function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $(".list-group").empty();

    // Looping through the array of movies
    for (let i = 0; i < cityName.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      let a = $("<button>");
      a.attr("data-name", cityName[i]);
      a.text(cityName[i]);
      $(".list-group").append(a);
    }
  }

$('.btn').on('click', function(event) {
    event.preventDefault();
    let city = $('.cityInput').val().trim();
    
    cityName.push(city);
    
    renderButtons();
    getWeather();
    getForecast();
    
})
  // on page load - functions need to run to display artist
  // on click of submit -- update artist with input value then run all needed functions
});