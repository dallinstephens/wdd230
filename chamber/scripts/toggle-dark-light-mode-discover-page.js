// Reference for moon symbol: https://www.compart.com/en/unicode/U+1F319
// Reference for sun symbol: https://www.compart.com/en/unicode/U+1F31E
// Reference on how to change css before content on click:
// https://stackoverflow.com/questions/10495243/how-change-content-value-of-pseudo-before-element-by-javascript
// Reference on how to use getAttribute in Javascript:
// https://www.w3schools.com/jsref/met_element_getattribute.asp
// References on how to change to dark mode and light mode:
// https://byui-cse.github.io/wdd230-course/lesson05/aa-chamber-home-05.html
// https://codepen.io/blazzard-jason/pen/ZERawEQ
const sliderElem = document.querySelector('.slider');
sliderElem.setAttribute('content-before', '🌞'); // This sets the initial value to sun.

const header = document.querySelector('header');
// Reference on how to change all nav ul li elements:
// https://stackoverflow.com/questions/68322315/queryselectorall-elements-not-changing-color-of-selected-classes
const navLi = document.querySelectorAll('.navigation li');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const html = document.querySelector('html');

const h2 = document.querySelectorAll('h2');
const sidebarContent = document.querySelectorAll('div.sidebarContent');
const figcaption = document.querySelectorAll('figcaption');

sliderElem.addEventListener('click', function (event) {
	if (event.target.getAttribute('content-before') == '🌞') {
    	event.target.setAttribute('content-before', '🌙');
        event.target.style.backgroundColor = 'var(--black)';
        header.style.backgroundColor = 'var(--black)';
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.borderColor = 'var(--black)';
            navLi[i].style.backgroundColor = 'var(--black)';
        }
        main.style.backgroundColor = 'var(--black)';
        main.style.color = 'var(--white)';
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.backgroundColor = 'var(--dark-grey)';
        }

        for (let i = 0; i < sidebarContent.length; i++) {
            sidebarContent[i].style.backgroundColor = 'var(--black)';
        }

        for (let i = 0; i < figcaption.length; i++) {
            figcaption[i].style.backgroundColor = 'var(--dark-grey)';
            figcaption[i].style.color = 'var(--white)';
        }
        
        footer.style.backgroundColor = 'var(--black)';
        html.style.backgroundColor = 'var(--dark-grey)';
    }
    else {
    	event.target.setAttribute('content-before', '🌞');
        event.target.style.backgroundColor = 'var(--dark-grey)';
        header.style.backgroundColor = 'var(--dark-grey)';
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.borderColor = 'var(--dark-grey)';
            navLi[i].style.backgroundColor = 'var(--dark-grey)';           
        }
        main.style.backgroundColor = 'var(--white)';
        main.style.color = 'var(--black)';
        
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.backgroundColor = 'var(--light-grey)';
        }
 
        for (let i = 0; i < sidebarContent.length; i++) {
            sidebarContent[i].style.backgroundColor = 'var(--white)';
        }

        for (let i = 0; i < figcaption.length; i++) {
            figcaption[i].style.backgroundColor = 'var(--light-grey)';
            figcaption[i].style.color = 'var(--black)';
        }        

        footer.style.backgroundColor = 'var(--dark-grey)';
        html.style.backgroundColor = 'var(--light-grey)';   
    }    
});