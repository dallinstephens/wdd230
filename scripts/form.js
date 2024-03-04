const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const formMessage = document.querySelector('#formMessage');

repeatPassword.addEventListener("focusout", checkIfSame);

function checkIfSame() {
    if (password.value !== repeatPassword.value) {
        formMessage.textContent = "Passwords DO NOT MATCH";
        formMessage.style.display = "block";
        repeatPassword.style.backgroundColor = "#fff0f3";
        repeatPassword.value = "";
        repeatPassword.focus();
    }
    else {
        formMessage.style.display = "none";
        repeatPassword.style.backgroundColor = "#fff";
        repeatPassword.style.color = "#000";
    }
}