const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const humidityEl = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const API_URL =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const API_KEY = '5a29b1de7b5ce249bd2c3148a1e36683';

async function checkWeather(city) {
  const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
  var data = await response.json();

  console.log(data);

  cityEl.innerHTML = data.name;
  tempEl.innerHTML = `${Math.round(data.main.temp)}°C`;
  humidityEl.innerHTML = `${data.main.humidity}%`;
  windEl.innerHTML = `${Math.round(data.wind.speed)} km/h`;
  weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
