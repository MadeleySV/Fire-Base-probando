import { showMessage } from "./show_message.js";

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const mainTaskContainer = document.getElementById("task-main-container");

export const loginCheck = user => {
// si existe el usuario ocultamos los botones necesarios
    if (user) {
        loggedInLinks.forEach(link => link.style.display = 'block');
        loggedOutLinks.forEach(link => link.style.display = 'none');
        mainTaskContainer.style.display = "flex";
        showMessage('logged out', 'green');
    }
    else {
        loggedInLinks.forEach(link => link.style.display = 'none');
        loggedOutLinks.forEach(link => link.style.display = 'block');
        mainTaskContainer.style.display = "none";
        showMessage('logged out', 'orange');
    }
}