const airTemperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#windSpeed');

// Reference for addEventListener change event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
airTemperature.addEventListener("change", CalculateWindChillIndex);
windSpeed.addEventListener("change", CalculateWindChillIndex);

// Reference for wind chill formula: https://byui-cse.github.io/wdd230-course/lesson06/aa-chamber-home-06.html
// Reference for JavaScript operators: https://www.w3schools.com/js/js_operators.asp
// References for wind chill examples: 
// https://sciencing.com/types-oldfashioned-weather-instruments-6849423.html
// https://www.weather.gov/media/ajk/brochures/Wind_Chill_Temperature_Index.pdf
function CalculateWindChillIndex() {
    console.log(airTemperature.value);
    console.log(windSpeed.value);
    windChillIndex = 35.74 + 0.6215 * airTemperature.value - 35.75 * windSpeed.value ** 0.16 + 0.4275 * airTemperature.value * windSpeed.value ** 0.16;

    if (airTemperature.value == "" || windSpeed.value == "") {
        document.querySelector('#windChill').value = "N/A";
    }
    else {
        // Reference on how to round number: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    document.querySelector('#windChill').value = Math.round(windChillIndex);
    }  
}

