// References for this assignment:
// https://byui-cse.github.io/wdd230-course/lesson10/api-weather.html
// https://www.google.com/maps/place/
// https://openweathermap.org/
// https://openweathermap.org/current#one
// https://openweathermap.org/current#data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

const weatherIcon = document.querySelector('#weatherIcon');
const currentTemp = document.querySelector('#currentTemp');
const description = document.querySelector('#description');

// Coordinates for Bountiful, Utah: 40.89015150017567, -111.8892375872155
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.89&lon=-111.88&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;   
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    currentTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F&nbsp;`;
    description.textContent = `- ${desc}`;
    // Reference to capitalize each word in the description:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    description.style.textTransform = 'capitalize';
}