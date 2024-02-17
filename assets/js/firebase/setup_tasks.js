import { createTask, 
    onGetTask,
    updateTask,
    deleteTask,
    getTask,} from "./firebase.js";

const taskForm = document.getElementById("create-form");
const tasksContainer = document.getElementById("tasks-container");

let id = "";
let editStatus = false;
let userGlobal;

    export default function setupTasks (user) {
        userGlobal = user;
        console.log(user);
    onGetTask((querySnapshot) => {

        let html = '';

        // REAd
        // crear el gred
        querySnapshot.forEach(doc => {
            const data = doc.data();

            html += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h6>${data.userName}</6>
                        <p>${data.time}</p>
                        <p class="text-end " >${data.date}</p>
                        <h4 class="card-title" >${data.title}</h4>
                        <p class="card-text">${data.description}</p>
                        <div class="row">
                            <button class='btn btn-danger btn-delete-custom mx-auto col-5' data-id='${doc.id}'>Delete</button>
                            <button class='btn btn-info btn-edit-custom mx-auto col-5' data-id='${doc.id}'>Edit</button>
                        </div>
                    </div>
                </div>
            `;

        });



        tasksContainer.innerHTML = html;

        // DELETE
        const btnsDelete = document.querySelectorAll(".btn-delete-custom");

        btnsDelete.forEach(btn => {
            btn.addEventListener("click", ({target: { dataset }}) => deleteTask(dataset.id));
        });

        // UPDATE
        const btnEdit = document.querySelectorAll(".btn-edit-custom");

        btnEdit.forEach(btn => {
            btn.addEventListener("click", async({target :{dataset}}) => {
                const doc = await getTask(dataset.id);
                const task = doc.data();

                taskForm["task-title"].value=task.title;
                taskForm["task-content"].value=task.description;

                editStatus = true;
                id = doc.id;

                taskForm['btn-task-save'].innerHTML = 'update';
                // taskText.innerHTML = 'Edit Task';
            });
        });
    


            });
        };

// create
taskForm.addEventListener("submit", (e) => {
    // Evitamos que recargue la pagina
    e.preventDefault();

// OBTENER EL NOMBRE
    const userName = userGlobal.displayName;


// FECHA
    const date = getFormattedDate(new Date());
 const time = getFormattedTime(new Date());

    const title = taskForm["task-title"].value;
    const description = taskForm["task-content"].value;

    // si no estoy editando el boton sirve para crear
    if (!editStatus){
            createTask(title, description, userName, date, time);
    }

    else {
        updateTask(id, ({
            title: title,
            description: description
        }));

        editStatus = false;

        taskForm['btn-task-save'].innerHTML = 'Create';

        // taskText.innerHTML = 'New Task';
        }


    taskForm.reset();
});

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

  function getFormattedTime(date) {
    var hours = date.getHours().toString();
    hours = hours.length > 1 ? hours : '0' + hours;
  
    var minutes = date.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;
  
    return hours + ':' + minutes;
  }
  
  // Ejemplo de uso
  var ahora = new Date();
  var horaFormateada = getFormattedTime(ahora);
  console.log(horaFormateada);  // Salida esperada: "hh:mm"
  
  
  