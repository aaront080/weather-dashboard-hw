var APIkey = "2bfcbaaa0f6a0ef229a56e34395f8102";
var currentDate = dayjs().format('DD/MM/YYYY');
var searchHistory = [];



function currentWeather(search) {
     var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=imperial`;
     $.ajax({
          url: queryUrl,
          method: "GET"
     }).then(function(cityWeather) {
          console.log(cityWeather);

        
          var iconLink = `https://openweather.org/img/wn/${cityWeather.weather[0].icon}@2x.png`;

          var searchCity = $(`
               <h3>${cityWeather.name}<span></h3>
               <img src="${iconLink}" />           
               <p>${currentDate}</p>
               <p>Temp: ${cityWeather.main.temp} F</p>
               <p>Wind: ${cityWeather.wind.speed} mph</p>
               <p>Humidity: ${cityWeather.main.humidity}%</p>               
               `);
               
               $("#cityWeather").append(searchCity)

               var lat = cityWeather.city.coord.lat;
               var lon = cityWeather.city.coord.lon;
     })
}

function fiveDayForecast(lat, lon) {

     var forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={APIkey}&units=imperial`
     var lat = cityWeather.city.coord.lat;
     var lon = cityWeather.city.coord.lon;

     $.ajax({
          url: forecastUrl,
          method: "GET"
     }).then(function(forecastResponse) {
          console.log(forecastResponse);
          

          for (let i = 1; i < 5; i++) {
               var cityObject = {
                    day: forecastResponse.list[i].dt,
                    forecastIcon: forecastResponse.list[i].weather[0].icon,
                    temp: forecastResponse.list[i].main.temp,
                    humidity: forecastResponse.list[i].main.humidity,
                    wind: forecastResponse.list[i].wind.speed,
               };

               var forecastDate = dayjs.unix(day).format("MM/DD/YYYY");
               var forecastIconUrl = `<img src="https://openweathermap.org/img/wm/${cityObject.forecastIcon}@2x.png" />`

               


              var day = forecastResponse.list[i].dt;
               var forecastDate = dayjs.unix(day).format("MM/DD/YYYY");
               var temp = forecastResponse.list[i].main.temp;
               var forecastIcon = forecastResponse.list[i].weather[0].icon;              
               var wind = forecastResponse.list[i].wind.speed;;
               var humidity = forecastResponse.list[i].main.humidity;
               var forecastEl = $("#fiveDayForecast")
               var lat = cityWeather.coord.lat;
               var lon = cityWeather.coord.lon;
          

               var forecastCard = document.createElement('div');
               forecastCard.classList.add("card", "col-sm-2", "bg-primary", "text-white");
               
               var dayCards = document.createElement("div");
               dayCards.classList.add("card-body");
               dayCards.innerHTML = `<h5>${day}</h5>
                                   <img src="https://openweather.org/img/wn/${forecastIcon}@2x.png"> 
                                   <br>
                                   ${temp}
                                   <br>
                                   ${wind}
                                   <br>
                                   ${humidity}`

               forecastCard.appendChild(dayCards);
               forecastEl.append(forecastCard); 

        

              

               

          }
     });
     
}

$("#searchBtn").on("click", function(event) {
     event.preventDefault();

     var search = $("#cityName").val().trim();
          currentWeather(search);
          if(!searchHistory.includes(search)) {
               searchHistory.push(search);
               var previousSearch = $(`
                    <li class="list-group-item">${search}</li>
                    `);
               $("#pastSearch").append(previousSearch);
          };
          localStorage.setItem('search', JSON.stringify(searchHistory));
          console.log(searchHistory);

})
