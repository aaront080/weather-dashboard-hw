var APIkey = "2bfcbaaa0f6a0ef229a56e34395f8102";
var date = dayjs().format('L');
var searchHistory = [];

/*var cityNameInput = $('#cityName')
var searchBtn = $('#searchBtn')
var searchHistory = $('#pastSearch')

var currentCity

function cityWeather(data) {
     var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'

     fetch(requestURL)
     .then(function(apiResponse) {
          return apiResponse.json();
     })
     .then(function(data) {
          var cityWeatherEl = $('#cityWeather');

          var cityName = $('<h3>');
          cityWeather.append(cityName);
     })
}*/



function currentWeather(city) {
     var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`;
     $.ajax({
          url: queryUrl,
          method: "GET"
     }).then(function(cityWeather) {
          console.log(cityWeather);

          $("#cityCard").css("display", "block");
          $("#cityWeather").empty();

          var icon = cityWeather.weather[0].icon;
          var iconLink = `https://openweather.org/img/wn/${icon}.png`

          var searchCity = $(`
               <h3>${cityWeather.name}<h3>
               <p>${date} <img src="${iconLink}/></p>
               <p>Temp: ${cityWeather.main.temp}</p>
               <p>Wind: ${cityWeather.wind.speed}</p>
               <p>Humidity: ${cityWeather.main.humidity}</p>               
               `);
               $("#cityWeather").append(searchCity)
     })
}

function fiveDayForecast(lat, lon) {
     var forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={APIkey}&units=imperial`
     $.ajax9({
          url: forecastUrl,
          method: "GET"
     }).then(function(forecastResponse) {
          console.log(forecastResponse);
          $("#fiveDayForecast").empty();
     })
     


$("#searchBtn").on("click", function(event) {
     event.preventDefault();


})
}