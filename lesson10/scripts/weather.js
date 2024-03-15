// References for this assignment:
// https://byui-cse.github.io/wdd230-course/lesson10/api-weather.html
// https://www.google.com/maps/place/Trierweiler,+Germany/@49.7778573,6.3198199,10z/data=!4m15!1m8!3m7!1s0x47957c9bd11cfbc5:0xfe0ca3a54dcd724b!2sTrier,+Germany!3b1!8m2!3d49.749992!4d6.6371433!16zL20vMDdnZHc!3m5!1s0x4795636e684cb8bd:0x422d4d510db1a80!8m2!3d49.7616083!4d6.5597045!16s%2Fm%2F02z0b_r?entry=ttu
// https://openweathermap.org/find?q=Trier%2C+Germany
// https://openweathermap.org/current#one
// https://openweathermap.org/current#data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Coordinates for Trier, Germany: 49.750802120327585, 6.646663120568834
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=b5c4c95a631b543d389e62b335d8edd1&units=imperial';

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
    // Reference to output zero decimal places using toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp
    currentTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    // Reference to capitalize each word:
    // https://www.w3schools.com/jsref/jsref_touppercase.asp  
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    // Reference to capitalize each word in the description:
    // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    captionDesc.style.textTransform = 'capitalize';
}