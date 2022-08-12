//functions//
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
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h4 = document.querySelector("h4");
  let image = document.querySelector("img");
  let humid = document.querySelector("#humidity");
  let windy = document.querySelector("#wind");
  h1.innerHTML = temperature;
  h2.innerHTML = name;
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
}

function currentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let apiKey = "2d6f334a7a1c1ea688260d0e96825495";
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function convertCelcius(event) {
  event.preventDefault;
  let celciusConvert = document.querySelector("h1");
  celciusConvert.innerHTML = celciusTemp + "°C";
}

function convertFarenheit(event) {
  event.preventDefault;
  let farenheitConversion = Math.round((celciusTemp * 9) / 5 + 32) + "°F";
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = farenheitConversion;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  let days = ["one", "two", "three", "four", "five"];
  days.forEach(function addDays(day) {
    forecastHTML =
      forecastHTML +
      `<div class="forecast-tile">
            <p class="forecast-weather-day">${day}</p>
            <img src="./assets/haze.svg" width="50px" height="50px" />
            <p> <span class="forecast-temperature-max">18</span> / <span class="forecast-temperature-min">11</span></p>
          </div>`;
  });
  forecastElement.innerHTML = forecastHTML;
}

//date and time//
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

let currentDate = document.querySelector("h3");
currentDate.innerHTML = `${days[day]} ${date} ${months[month]} <br> ${hour}:${minute}`;

//search city results//
let h2 = document.querySelector("h2");
let input = document.querySelector("form");
let cityInput = document.querySelector("#search");
input.addEventListener("submit", displayCity);

// //show current weather//
// let h5 = document.querySelector("h5");
// h5.addEventListener("click", currentWeather);

let celciusButton = document.querySelector("#celcius");
celciusButton.addEventListener("click", convertCelcius);

let farenheitButton = document.querySelector("#farenheit");
farenheitButton.addEventListener("click", convertFarenheit);

let celciusTemp = null;
let farenheitTemp = null;

displayForecast();
