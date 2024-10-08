const apiKey = "76eb11efef494fa5fe9befcf81d4d028";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search-input");
const weatherIcon = document.querySelector(".weather-icon");

const searchButton = document.querySelector(".search-img");

async function getWeather(city) {
  const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    //console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    const weatherCondition = data.weather[0].main;
    weatherIcon.src = `images/${weatherCondition}.png`;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  const city = searchBar.value.trim();
  if (city === "") {
    alert("please enter a city name");
  }
  getWeather(city);
});
