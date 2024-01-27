// References on how to create hamburger menu:
// https://byui-cse.github.io/wdd230-course/lesson03/responsive-menu.html
// https://codepen.io/blazzard-jason/pen/gmGxaj/
const mainnav = document.querySelector('.navigation');

const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', 
    () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });