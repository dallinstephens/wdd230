const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Reference for assignment: https://byui-cse.github.io/wdd230-course/lesson07/localStorage.html
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value + ' ';
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
    }
    input.focus();
});


