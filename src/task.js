const taskForm = document.getElementById("taskForm");

const Task = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

function taskBoxFactory (Task, parent) {
    let taskBox = document.createElement("div");
    parent.appendChild(taskBox);
    taskBox.id = taskBox;

    let taskBoxTitle = document.createElement("div");
    taskBoxTitle.id = "taskBoxTitle";
    taskBox.appendChild(taskBoxTitle);
    taskBoxTitle.textContent = Task.title;

    let taskBoxDueDate = document.createElement("div");
    taskBoxDueDate.id = "taskBoxDueDate";
    taskBox.appendChild(taskBoxDueDate);
    taskBoxDueDate.textContent = Task.dueDate;

    let taskBoxPriority = document.createElement("div");
    taskBoxPriority.id = "taskBoxPriority";
    taskBox.appendChild(taskBoxPriority);
    taskBoxPriority.textContent = Task.priority;

    taskBubble(Task);

    let myTaskBubble = taskBox.querySelector("#taskBubble");

    let taskBubbleButton = document.createElement("button");
    taskBox.appendChild(taskBubbleButton);
    taskBubbleButton.textContent = "View";
    taskBubbleButton.addEventListener("click", () => {
        myTaskBubble.style.display = "block";
    });

    function taskBubble (Task) {
        let taskBubble = document.createElement("div");
        taskBox.appendChild(taskBubble);
        taskBubble.id = "taskBubble";
        taskBubble.style.display = "none";

        let myTaskBox = taskBubble.parentElement;
        let myTitle = myTaskBox.querySelector("#taskBoxTitle");
        let myDueDate = myTaskBox.querySelector("#taskBoxDueDate");
        let myPriority = myTaskBox.querySelector("#taskBoxPriority");
    
        let taskBubbleTitle = document.createElement("input");
        taskBubbleTitle.type = "text";
        taskBubble.appendChild(taskBubbleTitle);
        taskBubbleTitle.value = myTitle.textContent;
    
        let taskBubbleDescription = document.createElement("input");
        taskBubbleDescription.type = "text";
        taskBubble.appendChild(taskBubbleDescription);
        taskBubbleDescription.value = Task.description;
    
        let taskBubbleDueDate = document.createElement("input");
        taskBubbleDueDate.type = "date";
        taskBubble.appendChild(taskBubbleDueDate);
        taskBubbleDueDate.textContent = myDueDate.textContent;
    
        let taskBubblePriority = document.createElement("select");
        taskBubble.appendChild(taskBubblePriority);
        let highPri = document.createElement("option");
        highPri.text = "High";
        taskBubblePriority.appendChild(highPri)
        let normalPri = document.createElement("option");
        normalPri.text = "Normal";
        taskBubblePriority.appendChild(normalPri);
        let lowPri = document.createElement("option");
        lowPri.text = "Low";
        taskBubblePriority.appendChild(lowPri);
        
        let doneButton = document.createElement("button");
        taskBubble.appendChild(doneButton);
        doneButton.textContent = "Finish";
        doneButton.addEventListener("click", () => {
            myTitle.textContent = taskBubbleTitle.value;
            myDueDate.textContent = taskBubbleDueDate.value;
            myPriority.textContent = taskBubblePriority.value;
            taskBubble.style.display = "none";
        });
    };

    const taskDelete = document.createElement("button");
    taskBox.appendChild(taskDelete);
    taskDelete.textContent = "Remove";
    taskDelete.addEventListener("click", () => {
        taskBox.parentElement.removeChild(taskBox);
    });
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