const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const humidityEl = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const API_URL =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const API_KEY = weatherAppConfig.API_KEY;

async function checkWeather(city) {
  const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);

  if (response.status == 404) {
    searchBox.classList.add('error');
    searchBox.placeholder = '*Invalid city name! Try again*';
    document.querySelector('.weather').style.display = 'none';
  }

  var data = await response.json();

  cityEl.innerHTML = data.name;
  tempEl.innerHTML = `${Math.round(data.main.temp)}°C`;
  humidityEl.innerHTML = `${data.main.humidity}%`;
  windEl.innerHTML = `${Math.round(data.wind.speed)} km/h`;
  weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;

  searchBox.classList.remove('error');
  searchBox.placeholder = 'enter city name';
  document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
  searchBox.value = '';
});

searchBox.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    checkWeather(searchBox.value);
    searchBox.value = '';
  }
});
