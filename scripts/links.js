// References used for help with this assignment:
// https://byui-cse.github.io/wdd230-course/lesson09/aa-json.html
// https://byui-cse.github.io/wdd230-course/lesson09/fetch.html

const learningActivities = document.querySelector("#learningActivities");

const linksURL = "data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {

    let ul = document.createElement("ul");

    weeks.forEach((week) => {
        let li = document.createElement("li");

        li.textContent = `Week ${week.lesson}: `;

        // References for length of an array and a for loop in js:
        // https://www.w3schools.com/jsref/jsref_length_array.asp
        // https://www.w3schools.com/js/js_loop_for.asp
        for (let i = 0; i < week.links.length; i++) {
            let a = document.createElement("a");
            a.setAttribute("href", week.links[i].url);
            a.setAttribute("target", "_blank");
            a.textContent = `${week.links[i].title}`;

            li.appendChild(a);

            if (i != week.links.length - 1) {
                let span = document.createElement("span");
                span.textContent = " | ";
                li.appendChild(span);
            }
        }

        ul.appendChild(li);
    });

    learningActivities.appendChild(ul);
}