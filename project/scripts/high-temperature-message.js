const todayHighTemperatureContainer = document.querySelector(".todayHighTemperatureContainer");
const closeTodayHighTemperatureContainer = document.querySelector("#closeTodayHighTemperatureContainer");

closeTodayHighTemperatureContainer.addEventListener("click", () => {
    todayHighTemperatureContainer.style.display = "none";
});