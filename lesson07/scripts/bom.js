const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Reference for assignment and how to do this: https://byui-cse.github.io/wdd230-course/lesson07/localStorage.html
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = ''; // clears the input value
        input.focus(); // sets the focus back to the input box
    }
});

function displayList(inputValue) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = inputValue + ' ';
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent); // function that removes the chapter from the array and localStorage
        input.focus();
    });
}

// Reference on JSON.stringify(): https://www.w3schools.com/js/js_json_stringify.asp
// JSON.stringify() turns an object or array into a string
function setChapterList() {
    localStorage.setItem('myFavoriteBOMList', JSON.stringify(chaptersArray));
}

// Reference on JSON.parse(): https://www.w3schools.com/js/js_json_parse.asp
// JSON.parse() turns a object string or array string into an object or array
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavoriteBOMList'));
}

// Reference for string slice(): https://www.w3schools.com/jsref/jsref_slice_string.asp
// Reference for array filter(): https://www.w3schools.com/jsref/jsref_filter.asp
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 2); // extracts the last character which is the "X" and extracts the extra one space " " after the chapter
    console.log(chapter);
    console.log(chaptersArray);
    chaptersArray = chaptersArray.filter((inputValue) => inputValue !== chapter);
    console.log(chaptersArray);
    setChapterList();
}
