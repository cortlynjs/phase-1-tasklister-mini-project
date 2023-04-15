const form = document.getElementById("create-task-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const input = document.getElementById("new-task-description");
  const task = input.value;

  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");
  taskItem.innerText = task;
  taskList.appendChild(taskItem);

  input.value = ""; // clear input field
});

