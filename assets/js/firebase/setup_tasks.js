import { createTask } from "./firebase.js";

const taskForm = document.getElementById("create-form");

taskForm.addEventListener("submit", (e) => {
    // evitamos que recargue la pagina
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const description = taskForm["task-content"].value;

    createTask(title, description);

    taskForm.reset();
})