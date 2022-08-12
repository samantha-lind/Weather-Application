//functions//
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayCity(event) {
  event.preventDefault();
  if (cityInput.value) {
    let cityName = cityInput.value;
    let apiKey = "2d6f334a7a1c1ea688260d0e96825495";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios.get(weatherUrl).then(showWeather);
  } else {
    alert("Please enter a city name to see the weather");
  }
}

function showWeather(result) {
  let temperature = Math.round(result.data.main.temp) + "°C";
  celciusTemp = Math.round(result.data.main.temp);
  farenheitTemp = (celciusTemp * 9) / 5 + 32;
  let description = result.data.weather[0].main;
  let name = result.data.name;
  let humidity = "Humidity: " + Math.round(result.data.main.humidity) + "%";
  let wind = "Wind: " + Math.round(result.data.wind.speed) + " kmph";
  let h3 = document.querySelector("h3");
  let h1 = document.querySelector("h1");
  let h4 = document.querySelector("h4");
  let image = document.querySelector("img");
  let humid = document.querySelector("#humidity");
  let windy = document.querySelector("#wind");
  h3.innerHTML = temperature;
  h1.innerHTML = name;
  h4.innerHTML = description;
  humid.innerHTML = humidity;
  windy.innerHTML = wind;

  if (description == "Clear" && Math.round(celciusTemp) >= 19) {
    image.src = "./assets/clear.svg";
  } else {
    if (description == "Clear" && Math.round(celciusTemp) < 19) {
      image.src = "./assets/clearcold.svg";
    }
  }

  if (description == "Clouds") {
    image.src = "./assets/clouds.svg";
  }

  if (description == "Rain" || description == "Drizzle") {
    image.src = "./assets/rain.svg";
  }

  if (description == "Snow") {
    image.src = "./assets/rain.svg";
  }

  if (
    description == "Thunderstorm" ||
    description == "Squall" ||
    description == "Tornado"
  ) {
    image.src = "./assets/storm.svg";
  }

  if (
    description == "Haze" ||
    description == "Mist" ||
    description == "Smoke" ||
    description == "Dust" ||
    description == "Fog" ||
    description == "Sand" ||
    description == "Ash"
  ) {
    image.src = "./assets/haze.svg";
  }

  generateForecast(result.data.coord);
}

function generateForecast(coords) {
  console.log(coords);
  let apiKey = "2d6f334a7a1c1ea688260d0e96825495";
  let forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,current,minutely,alerts&appid=${apiKey}&units=metric`;
  axios.get(forecastUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  let forecast = response.data.daily;
  forecast.forEach(function addDays(forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="forecast-tile">
            <p class="forecast-weather-day">${formatDay(forecastDay.dt)}</p>
            <img src="http://openweathermap.org/img/wn/${
              forecastDay.weather[0].icon
            }@2x.png"
            alt="Weather icon"
            width="60px" />
            <p> <span class="forecast-temperature-max">${Math.round(
              forecastDay.temp.max
            )}°C</span>  <span class="forecast-temperature-min">${Math.round(
          forecastDay.temp.min
        )}°C</span></p>
          </div>`;
    }
  });
  forecastElement.innerHTML = forecastHTML;
}

//to show current date and time//
let now = new Date();
let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let hour = now.getHours();
let minute = String(now.getMinutes()).padStart(2, "0");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = document.querySelector("h2");
currentDate.innerHTML = `${days[day]} ${date} ${months[month]} <br> ${hour}:${minute}`;

//search city results//
let h3 = document.querySelector("h3");
let input = document.querySelector("form");
let cityInput = document.querySelector("#search");
input.addEventListener("submit", displayCity);
