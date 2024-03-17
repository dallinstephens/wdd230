const banner = document.querySelector(".banner");
const closeBanner = document.querySelector("#closeBanner");

// References on how to get the day of the week:
// https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year
// https://www.w3schools.com/js/js_dates.asp
// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
// To test:
// let today = new Date("3/19/24");
let today = new Date();
let numericDayOfWeek = today.getDay();

// Only show banner on Mondays, Tuesdays, and Wednesdays. So, only show banner when numericDayofWeek = 1, 2, or 3.
if (numericDayOfWeek == 1 || numericDayOfWeek == 2 || numericDayOfWeek == 3) {
    banner.style.display = "flex";
}
else {
    banner.style.display = "none";
}

closeBanner.addEventListener("click", () => {
    banner.style.display = "none";
});