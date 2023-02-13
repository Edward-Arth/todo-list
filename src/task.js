const taskForm = document.getElementById("taskForm");
const taskCancel = document.getElementById("taskCancel");
const taskSubmit = document.getElementById("taskSubmit");

const Task = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

function taskBoxFactory (Task, parent) {
    let taskBox = document.createElement("div");
    parent.appendChild(taskBox);

    console.log(Task.title);

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

export default function taskGenerator (parent) {
    taskSubmit.addEventListener("click", taskSubmitClick, false);

    function taskSubmitClick (event) {
        event.preventDefault();
        const taskID = document.querySelector("#taskID").value;
        const descriptionID = document.querySelector("#descriptionID").value;
        const dueDateID = document.querySelector("#dueDateID").value;
        const priorityID =document.querySelector('#high' || '#normal' || 'low').value;
        let tasky = Task(taskID, descriptionID, dueDateID, priorityID);
        taskBoxFactory(tasky, parent);
    };
};