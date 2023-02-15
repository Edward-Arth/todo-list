import taskSubmitFunky from './task.js';
export default function userInterface () {
    const projectArray = [];
    const sidebar = document.getElementById("sidebar");
    const projectForm = document.getElementById("projectForm");
    const projectCancel = document.getElementById("projectCancel");
    const projectSubmit = document.getElementById("projectSubmit");
    const taskForm = document.getElementById("taskForm");
    const taskCancel = document.getElementById("taskCancel");
    const taskSubmit = document.getElementById("taskSubmit");

    const newProjectButton = (() => {
        const newProject = document.createElement("button");
        newProject.id = "newProject";
        newProject.textContent = "Create new project";
        sidebar.appendChild(newProject);
        newProject.addEventListener("click", () => {
            taskForm.style.display = "none";
            taskForm.reset();
            projectForm.style.display = "block";
        });
    })();

    function newTaskButton (parent) {
        const newTask = document.createElement("button");
        newTask.classList.add("newTaskButtons");
        parent.appendChild(newTask);
        newTask.textContent = "Add new task";
        newTask.addEventListener("click", () => {
            projectForm.style.display = "none";
            projectForm.reset();
            taskForm.style.display = "block";
        });
    };

    projectCancel.addEventListener("click", () => {
        projectForm.style.display = "none";
        projectForm.reset();
    });

    taskCancel.addEventListener("click", () => {
        taskForm.style.display = "none";
        taskForm.reset();
    });

    function listProject () {
        let newProject = projectArray.slice(-1);
        let getList = document.getElementById("projectList");
        let listed = document.createElement("li");
        getList.appendChild(listed);
        let newProjectStr = newProject.toString();
        let projectClassName = newProjectStr.replace(/\s/g, '');
        listed.textContent = newProject;
        listed.classList.add(projectClassName);

        let projectDisplay = document.getElementById("projectDisplay");
        let projectDiv = document.createElement("div");
        projectDisplay.appendChild(projectDiv);
        projectDiv.classList.add(projectClassName);
        projectDiv.style.display = "none";
        newTaskButton(projectDiv);

        let taskList = document.createElement("div");
        taskList.id = "taskList";
        taskList.classList.add(projectClassName);
        projectDiv.appendChild(taskList);

        listed.addEventListener("click", () => {
            let allProjects = projectDisplay.children;
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].style.display = "none";
            }
            let thisClass = listed.className;
            let thisProject = document.getElementsByClassName(thisClass);
            for (let i = 0; i < thisProject.length; i++) {
                thisProject[i].style.display = "block";
            };
        });
    };

    projectSubmit.addEventListener("click", projectSubmitClick, false);

    function projectSubmitClick (event) {
        let projectName = document.querySelector("#projectName").value;
        event.preventDefault();
        projectArray.push(projectName);
        listProject ();
        projectForm.style.display = "none";
        projectForm.reset();
    };

    function getTaskList () {
        let allProjects = projectDisplay.children;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].style.display === "block") {
                let taskListClass = document.getElementsByClassName(allProjects[i].className);
                let snipedTaskList = taskListClass.namedItem("taskList");
                return snipedTaskList;
            };
        };
    };

    taskSubmit.addEventListener("click", taskSubmitClick, false);

    function taskSubmitClick (event) {
        event.preventDefault();
        let taskList = getTaskList();
        taskSubmitFunky(taskList);
    };
};