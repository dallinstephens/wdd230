// References used for help with this assignment:
// https://byui-cse.github.io/wdd230-course/lesson09/aa-json.html
// https://byui-cse.github.io/wdd230-course/lesson09/fetch.html

const baseURL = "https://dallinstephens.github.io/wdd230/";

const linksURL = "https://dallinstephens.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson)) => {

    });
}