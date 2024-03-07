// References for this assignment and Fetch API:
// https://byui-cse.github.io/wdd230-course/lesson09/fetch.html
// https://byui-cit.github.io/learning-modules/modules/js/fetch-basics/prepare1/

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // temporary testing of data retrieval
    console.table(data.prophets); 
}

getProphetData();

// let results = null;

// async function getProphetData(url) {
//     const response = await fetch(url);
//     // check to see if the fetch was successful
//     if (response.ok) {
//         // The API will send us JSON...but we have to convert the
//         // response before we can use it.
//         // .json() also returns a promise...so we await it as well.
//         const data = await response.json();
//         doStuff(data);
//     }
// }

// function doStuff(data) {
//     results = data;
//     console.log("first: ", results);
// }

// getProphetData(url);
// console.log("second: ", results);