function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const taskPriority = document.getElementById("priority").value;
    const taskDueDate = document.getElementById("taskDueDate").value;

    

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const deleteButton = document.createElement("button");

        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleComplete);

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", deleteTask);

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        li.appendChild(document.createElement("br"));

        const priorityLabel = document.createElement("span");
        priorityLabel.textContent = "Priority: " + taskPriority;
        li.appendChild(priorityLabel);
        li.appendChild(document.createElement("br"));

        const dueDateLabel = document.createElement("span");
        dueDateLabel.textContent = "Due Date: " + taskDueDate;
        li.appendChild(dueDateLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function toggleComplete() {
    const li = this.parentElement;
    li.classList.toggle("complete");
}


function deleteTask() {
    const li = this.parentElement;
    li.remove();
}


document.getElementById("taskAdd").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});