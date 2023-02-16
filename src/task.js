const taskForm = document.getElementById("taskForm");

const Task = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

function taskBoxFactory (Task, parent) {
    let taskBox = document.createElement("div");
    parent.appendChild(taskBox);
    taskBox.id = "taskBox";

    let completeButton = document.createElement("button");
    taskBox.appendChild(completeButton);
    completeButton.id = "completeButton";
    completeButton.addEventListener("click", () => {
        if (completeButton.textContent === "") {
            taskBox.style.backgroundColor = "#4FFFB0";
            completeButton.textContent = "✓";
        }
        else {
            taskBox.style.backgroundColor = "";
            completeButton.textContent = "";
        }
    });

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

    let taskButtons = document.createElement("div");
    taskButtons.id = "taskButtonz";
    taskBox.appendChild(taskButtons);

    let taskBubbleButton = document.createElement("button");
    taskButtons.appendChild(taskBubbleButton);
    taskBubbleButton.classList.add("taskButtonsYo");
    taskBubbleButton.textContent = "View";
    taskBubbleButton.id = "viewButton";
    taskBubbleButton.addEventListener("click", () => {
        myTaskBubble.style.display = "flex";
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
        taskBubbleTitle.id = "taskBubbleTitle";
        taskBubbleTitle.type = "text";
        taskBubble.appendChild(taskBubbleTitle);
        taskBubbleTitle.value = myTitle.textContent;
    
        let taskBubbleDescription = document.createElement("textarea");
        taskBubbleDescription.id = "taskBubbleDescription";
        taskBubble.appendChild(taskBubbleDescription);
        taskBubbleDescription.cols = "50";
        taskBubbleDescription.rows = "20";
        taskBubbleDescription.value = Task.description;
    
        let taskBubbleDueDate = document.createElement("input");
        taskBubbleDueDate.id = "taskBubbleDueDate";
        taskBubbleDueDate.type = "date";
        taskBubble.appendChild(taskBubbleDueDate);
        taskBubbleDueDate.value = myDueDate.textContent;
    
        let taskBubblePriority = document.createElement("select");
        taskBubblePriority.id = "taskBubblePriority";
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
        doneButton.id = "taskBubbleDone";
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
    taskButtons.appendChild(taskDelete);
    taskDelete.classList.add("taskButtonsYo");
    taskDelete.id = "removeButton";
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