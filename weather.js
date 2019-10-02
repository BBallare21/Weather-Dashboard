function getWeather() {
    let APIKey = "e3c4c0f5b0220728586f535b1f6bef96";
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`;
    let current = moment().format('L');
    
    $.ajax({
        url: weatherURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
      
          // Log the queryURL
          console.log(weatherURL);
      
          // Log the resulting object
          console.log(response);

          let icon = response.weather[0].icon
          let getIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`
          let lat = response.coord.lat;
          let lon = response.coord.lon;
      
          // Transfer content to HTML
          $('#city').empty();
          $("#city").text(`${response.name} (${current})`);
          $('#temp').empty();
          $("#temp").html(`Temperature: ${response.main.temp}&#8457;`);
          $('#humidity').empty();
          $("#humidity").text(`Humidity: ${response.main.humidity}%`);
          $('#wind').empty();
          $("#wind").text(`Wind Speed: ${response.wind.speed} MPH`);
          
          let image1 = $('<img>');
          image1.attr('src',getIcon);
          $("#city").append(image1);

          function getUV() {
            let APIKey = "e3c4c0f5b0220728586f535b1f6bef96";
            let uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;
            $.ajax({
                url: uvURL,
                method: "GET"
              })
                // We store all of the retrieved data inside of an object called "response"
                .then(function(response) {
              
                  // Log the queryURL
                  console.log(uvURL);
              
                  // Log the resulting object
                  console.log(response);
                  
                  // Transfer content to HTML
                  $("#uvIndex").html(`UV Index: ${response.value}`);
        
            });
        }
        getUV();
        });        
}




