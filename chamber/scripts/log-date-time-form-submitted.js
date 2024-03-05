// Reference for HTMLFormElement submit event:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
// Reference for HTML DOM Element addEventListener():
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

const form = document.querySelector("#joinForm");
const dateAndTimeWhenFormSubmitted = document.querySelector("#dateAndTimeWhenFormSubmitted");

joinForm.addEventListener("submit", function() {
    dateAndTimeWhenFormSubmitted.value = Date.now();
    console.log(dateAndTimeWhenFormSubmitted.value);
});
