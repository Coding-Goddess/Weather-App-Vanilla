function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "98d958345671f03b12e202a0a81777da";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Marfa&appid=98d958345671f03b12e202a0a81777da&units=metric`;

https: axios.get(apiUrl).then(displayTemperature);
