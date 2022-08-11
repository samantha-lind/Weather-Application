//functions//
function displayCity(event) {
  event.preventDefault();
  if (cityInput.value) {
    let cityName = cityInput.value;
    let apiKey = "2d6f334a7a1c1ea688260d0e96825495";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
    h2.innerHTML = cityName;
  } else {
    alert("Please enter a city name to see the weather");
  }
}

function showWeather(result) {
  let temperature = Math.round(result.data.main.temp) + "°C";
  let description = result.data.weather[0].main;
  let name = result.data.name;
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h4 = document.querySelector("h4");
  let image = document.querySelector("img");
  h1.innerHTML = temperature;
  h2.innerHTML = name;
  h4.innerHTML = description;
  if (description == "Clear" && Math.round(result.data.main.temp) >= 19) {
    image.src = "./assets/clear.svg";
  } else {
    if (description == "Clear" && Math.round(result.data.main.temp) < 19) {
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

//date and time//
let now = new Date();
let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let hour = now.getHours();
let minute = String(now.getMinutes()).padStart(2, "0");

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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

let h5 = document.querySelector("h5");
h5.addEventListener("click", currentWeather);
