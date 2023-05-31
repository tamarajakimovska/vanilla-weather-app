function displayTemperature(response) {
let temperatureElement = document.querySelector(#temperature);
temperatureElement.innerHTML = response.data.main.temp
}

let apiKey = "b66a983444a5fc762f7f21239b661e19";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
