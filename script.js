// Ambil elemen DOM
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");
const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");

let total = 0;
let completed = 0;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  addTodo(taskText);
  input.value = "";
});


function addTodo(text) {
  emptyState.style.display = "none";
  total++;
  totalTasks.textContent = total;


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

  completeBtn.addEventListener("click", (e) => {
    const parentLi = e.target.closest("li");
    parentLi.classList.toggle("completed");

    if (parentLi.classList.contains("completed")) completed++;
    else completed--;

    completedTasks.textContent = completed;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.textContent = "Hapus";
  deleteBtn.style.display = "inline-block"; 

  deleteBtn.addEventListener("click", (e) => {
    const parentLi = e.target.closest("li");

    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus tugas ini?");
    if (!confirmDelete) return;

    parentLi.remove();
    total--;
    totalTasks.textContent = total;

    if (parentLi.classList.contains("completed")) {
      completed--;
      completedTasks.textContent = completed;
    }

    if (total === 0) {
      emptyState.style.display = "block";
    }
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  todoList.appendChild(li);
}
