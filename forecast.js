function getForecast() {
    let APIKey = "e3c4c0f5b0220728586f535b1f6bef96";
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${APIKey}`;
    let day1 = moment().add(1, 'days').calendar('L');
    let day2 = moment().add(2, 'days').calendar('L');
    let day3 = moment().add(3, 'days').calendar('L');
    let day4 = moment().add(4, 'days').calendar('L');
    let day5 = moment().add(5, 'days').calendar('L');
    
    $.ajax({
        url: forecastURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
      
          // Log the queryURL
          console.log(forecastURL);
      
          // Log the resulting object
          console.log(response);

          let icon1 = response.list[4].weather[0].icon
          let getIcon1 = `http://openweathermap.org/img/wn/${icon1}@2x.png`
          let icon2 = response.list[12].weather[0].icon
          let getIcon2 = `http://openweathermap.org/img/wn/${icon2}@2x.png`
          let icon3 = response.list[20].weather[0].icon
          let getIcon3 = `http://openweathermap.org/img/wn/${icon3}@2x.png`
          let icon4 = response.list[28].weather[0].icon
          let getIcon4 = `http://openweathermap.org/img/wn/${icon4}@2x.png`
          let icon5 = response.list[36].weather[0].icon
          let getIcon5 = `http://openweathermap.org/img/wn/${icon5}@2x.png`
      
          // Transfer content to HTML
          $('#date1').text(`${day1}`);
          $('#date2').text(`${day2}`);
          $('#date3').text(`${day3}`);
          $('#date4').text(`${day4}`);
          $('#date5').text(`${day5}`);
        
          let image1 = $('<img>');
          let image2 = $('<img>');
          let image3 = $('<img>');
          let image4 = $('<img>');
          let image5 = $('<img>');
          image1.attr('src',getIcon1);
          $("#weatherimg1").append(image1);
          image2.attr('src',getIcon2);
          $("#weatherimg2").append(image2);
          image3.attr('src',getIcon3);
          $("#weatherimg3").append(image3);
          image4.attr('src',getIcon4);
          $("#weatherimg4").append(image4);
          image5.attr('src',getIcon5);
          $("#weatherimg5").append(image5);
        
          $("#tempF1").html(`Temp: ${response.list[4].main.temp}&#8457;`);
          $("#tempF2").html(`Temp: ${response.list[12].main.temp}&#8457;`);
          $("#tempF3").html(`Temp: ${response.list[20].main.temp}&#8457;`);
          $("#tempF4").html(`Temp: ${response.list[28].main.temp}&#8457;`);
          $("#tempF5").html(`Temp: ${response.list[36].main.temp}&#8457;`);
          $("#humidityF1").text(`Humidity: ${response.list[4].main.humidity}%`);
          $("#humidityF2").text(`Humidity: ${response.list[12].main.humidity}%`);
          $("#humidityF3").text(`Humidity: ${response.list[20].main.humidity}%`);
          $("#humidityF4").text(`Humidity: ${response.list[28].main.humidity}%`);
          $("#humidityF5").text(`Humidity: ${response.list[36].main.humidity}%`);

        });
}
