// References for this assignment:
// https://byui-cse.github.io/wdd230-course/lesson10/api-weather.html
// https://www.google.com/maps/place/
// https://openweathermap.org/
// https://openweathermap.org/current#one
// https://openweathermap.org/current#data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
const todayHighTemperature = document.querySelector('#todayHighTemperature');
const weatherCity = document.querySelectorAll('.weatherCity');
const currentWeatherTitle = document.querySelector('#currentWeatherTitle');
const currentTemperature = document.querySelector('#currentTemperature');
const currentWeatherIcon = document.querySelector('#currentWeatherIcon');
const currentWeatherDescription = document.querySelector('#currentWeatherDescription');
const currentHumidity = document.querySelector('#currentHumidity');

// Coordinates for Centro, San Miguel de Cozumel, Quintana Roo, Mexico: 20.51120182304566, -86.94606302177694
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51120182304566&lon=-86.94606302177694&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCurrentWeatherResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        // console.log(error);
    }
}

apiFetchWeather();

function displayCurrentWeatherResults(data) {
    for (let i = 0; i < weatherCity.length; i++) {
        weatherCity[i].textContent = `Centro, ${data.name}`;
    }
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    todayHighTemperature.textContent = data.main.temp.toFixed();
    currentWeatherTitle.textContent = data.weather[0].main;
    // Reference: https://openweathermap.org/weather-conditions  
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;   
    currentWeatherIcon.setAttribute('src', iconSrc);
    currentWeatherIcon.setAttribute('alt', desc);
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    currentTemperature.textContent = data.main.temp.toFixed();
    currentWeatherDescription.textContent = `${desc}`;
    // Reference to capitalize each word in the description:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    currentWeatherDescription.style.textTransform = 'capitalize';
    currentHumidity.textContent = data.main.humidity.toFixed();
}

const tomorrowWeatherTitle = document.querySelector('#tomorrowWeatherTitle');
const tomorrowTemperature = document.querySelector('#tomorrowTemperature');
const tomorrowWeatherIcon = document.querySelector('#tomorrowWeatherIcon');
const tomorrowWeatherDescription = document.querySelector('#tomorrowWeatherDescription');
const tomorrowHumidity = document.querySelector('#tomorrowHumidity');

// Coordinates for Centro, San Miguel de Cozumel, Quintana Roo, Mexico Cozumel: 20.51120182304566, -86.94606302177694
// References for forecast days of the week:
// https://byui-cse.github.io/wdd230-course/lesson10/aa-chamber-home-10.html
// https://openweathermap.org/forecast5
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51120182304566&lon=-86.94606302177694&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayTomorrowWeatherResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        // console.log(error);
    }
}

function displayTomorrowWeatherResults(data) {
    tomorrowWeatherTitle.textContent = data.list[6].weather[0].main;
    // Reference: https://openweathermap.org/weather-conditions  
    const iconSrc = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
    let desc = data.list[6].weather[0].description;   
    tomorrowWeatherIcon.setAttribute('src', iconSrc);
    tomorrowWeatherIcon.setAttribute('alt', desc);
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    tomorrowTemperature.textContent = data.list[6].main.temp.toFixed();
    tomorrowWeatherDescription.textContent = `${desc}`;
    // Reference to capitalize each word in the description:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    tomorrowWeatherDescription.style.textTransform = 'capitalize';
    tomorrowHumidity.textContent = data.list[6].main.humidity.toFixed();
}

apiFetchForecast();