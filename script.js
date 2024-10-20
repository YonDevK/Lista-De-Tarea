function addTask() {
    let taskInput = document.getElementById("new-task");
    let taskList = document.getElementById("tasks");
    let task = document.createElement("li");
    task.innerText = taskInput.value;
    task.addEventListener("click", removeTask);
    taskList.appendChild(task);
    taskInput.value = "";
}

function removeTask(event) {
    let task = event.target;
    task.remove();
}

document.getElementById("add-task-button").addEventListener("click", addTask);
