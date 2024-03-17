// References for this assignment:
// https://byui-cse.github.io/wdd230-course/lesson10/api-weather.html
// https://www.google.com/maps/place/
// https://openweathermap.org/
// https://openweathermap.org/current#one
// https://openweathermap.org/current#data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const description = document.querySelector('#description');
const windSpeed = document.querySelector('#windSpeed');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
const firstDay = document.querySelector('#firstDay');
const firstDayWeatherIcon = document.querySelector('#firstDayWeatherIcon');
const firstDayTemp = document.querySelector('#firstDayTemp');
const firstDayDesc = document.querySelector('#firstDayDesc');

// Coordinates for Bountiful, Utah: 40.89015150017567, -111.8892375872155
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.89&lon=-111.88&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetchWeather();

function displayWeatherResults(data) {
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    currentTemp.textContent = data.main.temp.toFixed();    
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;   
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    description.textContent = `${desc}`;
    // Reference to capitalize each word in the description:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    description.style.textTransform = 'capitalize';
    windSpeed.textContent = data.wind.speed.toFixed();
    CalculateWindChillIndex(currentTemp.textContent, windSpeed.textContent);
    // Test: Answer for -20°F and 40 mph should be -57°F according to https://www.weather.gov/safety/cold-faqs#:~:text=Wind%20chill%20Temperature%20is%20only,F%20to%2018%C2%B0F. 
    // CalculateWindChillIndex(-20, 40);

    // Reference on how to get the day of the week:
    // https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year
    let today = new Date();
    let day1 = days[today.getDay()];
    firstDay.textContent = day1;
    firstDayWeatherIcon.setAttribute('src', iconSrc);
    firstDayWeatherIcon.setAttribute('alt', desc);
    firstDayTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F`;
    firstDayDesc.textContent = desc;
    firstDayDesc.style.textTransform = 'capitalize';
}

// Reference for wind chill formula: https://byui-cse.github.io/wdd230-course/lesson06/aa-chamber-home-06.html
// Reference for JavaScript operators: https://www.w3schools.com/js/js_operators.asp
// References for wind chill examples: 
// https://sciencing.com/types-oldfashioned-weather-instruments-6849423.html
// https://www.weather.gov/media/ajk/brochures/Wind_Chill_Temperature_Index.pdf
function CalculateWindChillIndex(airTemperature, windSpeed) {
    console.log(airTemperature);
    console.log(windSpeed);
    let windChillIndex = 35.74 + 0.6215 * airTemperature - 35.75 * windSpeed ** 0.16 + 0.4275 * airTemperature * windSpeed ** 0.16;

    // Reference for when wind chill is not calculated:
    // https://www.weather.gov/safety/cold-faqs#:~:text=Wind%20chill%20Temperature%20is%20only,F%20to%2018%C2%B0F.
    // "Wind chill Temperature is only defined for temperatures at or below 50°F and wind speeds above 3 mph" (see reference above).
    if (airTemperature <= 50 && windSpeed > 3) {
        document.querySelector('#windChill').innerHTML = `${windChillIndex.toFixed()}&deg;F`;
    }
    else {
        document.querySelector('#windChill').textContent = "N/A";
    }  
}

// Coordinates for Bountiful, Utah: 40.89015150017567, -111.8892375872155
// References for forecast days of the week:
// https://byui-cse.github.io/wdd230-course/lesson10/aa-chamber-home-10.html
// https://openweathermap.org/forecast5
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.89&lon=-111.88&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';
const secondDay = document.querySelector('#secondDay');
const secondDayWeatherIcon = document.querySelector('#secondDayWeatherIcon');
const secondDayTemp = document.querySelector('#secondDayTemp');
const secondDayDesc = document.querySelector('#secondDayDesc');
const thirdDay = document.querySelector('#thirdDay');
const thirdDayWeatherIcon = document.querySelector('#thirdDayWeatherIcon');
const thirdDayTemp = document.querySelector('#thirdDayTemp');
const thirdDayDesc = document.querySelector('#thirdDayDesc');
const fourthDay = document.querySelector('#fourthDay');
const fourthDayWeatherIcon = document.querySelector('#fourthDayWeatherIcon');
const fourthDayTemp = document.querySelector('#fourthDayTemp');
const fourthDayDesc = document.querySelector('#fourthDayDesc');
const fifthDay = document.querySelector('#fifthDay');
const fifthDayWeatherIcon = document.querySelector('#fifthDayWeatherIcon');
const fifthDayTemp = document.querySelector('#fifthDayTemp');
const fifthDayDesc = document.querySelector('#fifthDayDesc');
const sixthDay = document.querySelector('#sixthDay');
const sixthDayWeatherIcon = document.querySelector('#sixthDayWeatherIcon');
const sixthDayTemp = document.querySelector('#sixthDayTemp');
const sixthDayDesc = document.querySelector('#sixthDayDesc');
const seventhDay = document.querySelector('#seventhDay');
const seventhDayWeatherIcon = document.querySelector('#seventhDayWeatherIcon');
const seventhDayTemp = document.querySelector('#seventhDayTemp');
const seventhDayDesc = document.querySelector('#seventhDayDesc');

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayForecastResults(data) {
    // Reference on how to get the day of the week:
    // https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year
    let day2Data = new Date(data.list[2].dt_txt);
    let day2 = days[day2Data.getDay()];
    secondDay.textContent = day2;
    let secondDayIconSrc = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`;
    let secondDayDescription = data.list[2].weather[0].description;  
    secondDayWeatherIcon.setAttribute('src', secondDayIconSrc);
    secondDayWeatherIcon.setAttribute('alt', secondDayDescription);
    secondDayTemp.innerHTML = `${data.list[2].main.temp.toFixed()}&deg;F`;
    secondDayDesc.textContent = secondDayDescription;
    secondDayDesc.style.textTransform = 'capitalize';

    let day3Data = new Date(data.list[10].dt_txt);
    let day3 = days[day3Data.getDay()];
    thirdDay.textContent = day3;
    let thirdDayIconSrc = `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}.png`;
    let thirdDayDescription = data.list[10].weather[0].description;  
    thirdDayWeatherIcon.setAttribute('src', thirdDayIconSrc);
    thirdDayWeatherIcon.setAttribute('alt', thirdDayDescription);
    thirdDayTemp.innerHTML = `${data.list[10].main.temp.toFixed()}&deg;F`;
    thirdDayDesc.textContent = thirdDayDescription;
    thirdDayDesc.style.textTransform = 'capitalize';

    let day4Data = new Date(data.list[18].dt_txt);
    let day4 = days[day4Data.getDay()];
    fourthDay.textContent = day4;
    let fourthDayIconSrc = `https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}.png`;
    let fourthDayDescription = data.list[18].weather[0].description;  
    fourthDayWeatherIcon.setAttribute('src', fourthDayIconSrc);
    fourthDayWeatherIcon.setAttribute('alt', fourthDayDescription);
    fourthDayTemp.innerHTML = `${data.list[18].main.temp.toFixed()}&deg;F`;
    fourthDayDesc.textContent = fourthDayDescription;
    fourthDayDesc.style.textTransform = 'capitalize';

    let day5Data = new Date(data.list[26].dt_txt);
    let day5 = days[day5Data.getDay()];
    fifthDay.textContent = day5;
    let fifthDayIconSrc = `https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}.png`;
    let fifthDayDescription = data.list[26].weather[0].description;  
    fifthDayWeatherIcon.setAttribute('src', fifthDayIconSrc);
    fifthDayWeatherIcon.setAttribute('alt', fifthDayDescription);
    fifthDayTemp.innerHTML = `${data.list[26].main.temp.toFixed()}&deg;F`;
    fifthDayDesc.textContent = fifthDayDescription;
    fifthDayDesc.style.textTransform = 'capitalize';

    let day6Data = new Date(data.list[34].dt_txt);
    let day6 = days[day6Data.getDay()];
    sixthDay.textContent = day6;
    let sixthDayIconSrc = `https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}.png`;
    let sixthDayDescription = data.list[34].weather[0].description;  
    sixthDayWeatherIcon.setAttribute('src', sixthDayIconSrc);
    sixthDayWeatherIcon.setAttribute('alt', sixthDayDescription);
    sixthDayTemp.innerHTML = `${data.list[34].main.temp.toFixed()}&deg;F`;
    sixthDayDesc.textContent = sixthDayDescription;
    sixthDayDesc.style.textTransform = 'capitalize';

    let day7Data = new Date(data.list[39].dt_txt);
    let day7 = days[day7Data.getDay()];
    seventhDay.textContent = day7;
    let seventhDayIconSrc = `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png`;
    let seventhDayDescription = data.list[39].weather[0].description;  
    seventhDayWeatherIcon.setAttribute('src', seventhDayIconSrc);
    seventhDayWeatherIcon.setAttribute('alt', seventhDayDescription);
    seventhDayTemp.innerHTML = `${data.list[39].main.temp.toFixed()}&deg;F`;
    seventhDayDesc.textContent = seventhDayDescription;
    seventhDayDesc.style.textTransform = 'capitalize';
}

apiFetchForecast();