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
sliderElem.setAttribute('content-before', '🌙'); // This sets the initial value to moon.

const header = document.querySelector('header');
const memberButton = document.querySelector('main #section1 span button');
// Reference on how to change all nav ul li elements:
// https://stackoverflow.com/questions/68322315/queryselectorall-elements-not-changing-color-of-selected-classes
const navLi = document.querySelectorAll('li');
const main = document.querySelector('main');
const heroLabel = document.querySelector('.heroLabel');
const section2Div = document.querySelector('#section2 div');
const section4Button = document.querySelector('#section4 button');
const spotlightH3 = document.querySelectorAll('.spotlight h3');
const spotlightParagraphs = document.querySelectorAll('.spotlight p');
const weatherSection = document.querySelector('#section5');
const weatherSectionH4 = document.querySelectorAll('main div#section5 h4');
const footer = document.querySelector('footer');
const html = document.querySelector('html');

sliderElem.addEventListener('click', function (event) {
	if (event.target.getAttribute('content-before') == '🌙') {
    	event.target.setAttribute('content-before', '🌞');
        event.target.style.backgroundColor = 'var(--black)';
        header.style.backgroundColor = 'var(--black)';
        memberButton.style.backgroundColor = 'var(--black)';
        memberButton.style.color = 'var(--white)';
        memberButton.style.border = '5px solid var(--white)';
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.borderColor = 'var(--black)';
            navLi[i].style.backgroundColor = 'var(--black)';
        }
        main.style.backgroundColor = 'var(--black)';
        main.style.color = 'var(--white)';
        heroLabel.style.background = 'rgba(0, 0, 0, 0.8)';
        section2Div.style.backgroundColor = 'var(--black)';
        section4Button.style.borderColor = 'var(--white)';
        section4Button.style.backgroundColor = 'var(--dark-red)';
        section4Button.style.color = 'var(--white)';
        // References on how to add border on only one side:
        // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
        // https://www.w3schools.com/cssref/css3_pr_box-shadow.php
        for (let i = 0; i < spotlightH3.length; i++) {
            spotlightH3[i].style.boxShadow = '-1px -1px 0 var(--white), 1px 0 var(--white)';
        }
        for (let i = 0; i < spotlightParagraphs.length; i++) {
            spotlightParagraphs[i].style.backgroundColor = 'var(--black)';
            spotlightParagraphs[i].style.color = 'var(--white)';
            spotlightParagraphs[i].style.outline = '1px solid var(--white)';
        }
        weatherSection.style.backgroundColor = 'var(--black)';
        weatherSection.style.borderColor = 'var(--white)';
        for (let i = 0; i < weatherSectionH4.length; i++) {
            weatherSectionH4[i].style.borderColor = 'var(--white)';
        } 
        footer.style.backgroundColor = 'var(--black)';
        html.style.backgroundColor = 'var(--dark-grey)';
    }
    else {
    	event.target.setAttribute('content-before', '🌙');
        event.target.style.backgroundColor = 'var(--dark-grey)';
        header.style.backgroundColor = 'var(--dark-grey)';
        memberButton.style.backgroundColor = 'var(--white)';
        memberButton.style.color = 'var(--black)';
        memberButton.style.border = '5px double var(--dark-red)';
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.borderColor = 'var(--dark-grey)';
            navLi[i].style.backgroundColor = 'var(--dark-grey)';  
        }
        main.style.backgroundColor = 'var(--white)';
        main.style.color = 'var(--black)';
        heroLabel.style.background = 'radial-gradient(rgba(255, 255, 255, 0.7), rgba(29, 65, 82, 0.2))';        
        section2Div.style.backgroundColor = 'var(--dark-grey)';
        section4Button.style.borderColor = 'var(--dark-red)';
        section4Button.style.backgroundColor = 'var(--white)';
        section4Button.style.color = 'var(--black)';        
        for (let i = 0; i < spotlightH3.length; i++) {
            spotlightH3[i].style.boxShadow = 'none';
        }
        for (let i = 0; i < spotlightParagraphs.length; i++) {
            spotlightParagraphs[i].style.backgroundColor = 'var(--light-grey)';
            spotlightParagraphs[i].style.color = 'var(--black)';
            spotlightParagraphs[i].style.outline = 'none';
        }
        weatherSection.style.backgroundColor = 'var(--dark-red)';
        weatherSection.style.borderColor = 'var(--dark-grey)';
        for (let i = 0; i < weatherSectionH4.length; i++) {
            weatherSectionH4[i].style.borderColor = 'var(--dark-grey)';
        } 
        footer.style.backgroundColor = 'var(--dark-grey)';
        html.style.backgroundColor = 'var(--light-grey)';   
    }    
});