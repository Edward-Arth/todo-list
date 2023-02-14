const taskForm = document.getElementById("taskForm");
const taskSubmit = document.getElementById("taskSubmit");

const Task = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

function taskBoxFactory (Task, parent) {
    let taskBox = document.createElement("div");
    parent.appendChild(taskBox);

    let taskBoxTitle = document.createElement("div");
    taskBox.appendChild(taskBoxTitle);
    taskBoxTitle.textContent = Task.title;

    let taskBoxDueDate = document.createElement("div");
    taskBox.appendChild(taskBoxDueDate);
    taskBoxDueDate.textContent = Task.dueDate;

    let taskBoxPriority = document.createElement("div");
    taskBox.appendChild(taskBoxPriority);
    taskBoxPriority.textContent = Task.priority;
};

export default function taskSubmitFunky (parent) {
    const taskID = document.querySelector("#taskID").value;
    const descriptionID = document.querySelector("#descriptionID").value;
    const dueDateID = document.querySelector("#dueDateID").value;
    const priorityID = document.querySelector('input[name="priority"]:checked').value;
    let tasky = Task(taskID, descriptionID, dueDateID, priorityID);
    taskBoxFactory(tasky, parent);
    taskForm.style.display = "none";
    taskForm.reset();
};