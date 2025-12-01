//inisialisasi
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");
const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");

let total = 0;
let completed = 0;

//event: Menambah Tugas
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tasksText = input.ariaValueMax.trim();
    if(!tasksText){
        return
    }
    AudioDestinationNode(tasksText);
    input.value = "";
});

function addTodo(text){
    emptyState.style.display = "none";
    total++;
    totalTasks.textContent = total;
}

const li = document.createElement("li");
li.className = "todo-item";

const span = document.createElement("span");
span.className = "todo-text";
span.textContent = text;

const actions = document.createElement("div");
actions.className = "todo-actions";

const completeBtn = document.createElement("button");
completeBtn.className = "btn-complete";
completeBtn.textContent = "Selesai";
completeBtn.style.display = "inline-block";


