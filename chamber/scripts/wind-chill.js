const airTemperature = document.querySelector('#temperature').textContent;
const windSpeed = document.querySelector('#windSpeed').textContent;

// Reference for wind chill formula: https://byui-cse.github.io/wdd230-course/lesson06/aa-chamber-home-06.html
// Reference for JavaScript operators: https://www.w3schools.com/js/js_operators.asp
// References for wind chill examples: 
// https://sciencing.com/types-oldfashioned-weather-instruments-6849423.html
// https://www.weather.gov/media/ajk/brochures/Wind_Chill_Temperature_Index.pdf
let windChillIndex = 35.74 + 0.6215 * airTemperature - 35.75 * windSpeed ** 0.16 + 0.4275 * airTemperature * windSpeed ** 0.16;

// Reference on how to round number: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
document.querySelector('#windChill').textContent = Math.round(windChillIndex);