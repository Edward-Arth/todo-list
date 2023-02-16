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
        newProject.textContent = "New project";
        sidebar.appendChild(newProject);
        newProject.addEventListener("click", () => {
            taskForm.style.display = "none";
            taskForm.reset();
            projectForm.style.display = "flex";
        });
    })();

    function newTaskButton (parent) {
        const newTask = document.createElement("button");
        newTask.classList.add("newTaskButtons");
        parent.appendChild(newTask);
        newTask.textContent = "Add task";
        newTask.addEventListener("click", () => {
            projectForm.style.display = "none";
            projectForm.reset();
            taskForm.style.display = "flex";
            let taskListOff = getTaskList();
            taskListOff.style.display = "none";
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
        let listedTitle = document.createElement("div");
        listed.appendChild(listedTitle);
        listedTitle.textContent = newProject;
        listedTitle.id = "listedTitle";
        listed.classList.add(projectClassName);

        let deleteProject = document.createElement("button");
        listed.appendChild(deleteProject);
        deleteProject.id = "deleteProject";
        deleteProject.classList.add(projectClassName);
        deleteProject.textContent = "X";
        deleteProject.addEventListener("click", () => {
            let wholeClass = document.getElementsByClassName(projectClassName);
            while(wholeClass[0]) {
                wholeClass[0].parentNode.removeChild(wholeClass[0]);
            };
        });

        let projectDisplay = document.getElementById("projectDisplay");
        let projectDiv = document.createElement("div");
        projectDisplay.appendChild(projectDiv);
        projectDiv.classList.add(projectClassName);
        projectDiv.id = "projectDiv";
        projectDiv.style.display = "none";

        newTaskButton(projectDiv);

        let taskList = document.createElement("div");
        taskList.id = "taskList";
        taskList.classList.add(projectClassName);
        projectDiv.appendChild(taskList);

        listed.addEventListener("click", () => {
            let allProjects = projectDisplay.children;
            let allDeleteButtons = document.querySelectorAll("#deleteProject");
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].style.display = "none";
                allDeleteButtons[i].style.display = "none";
            }
            let thisClass = listed.className;
            let thisProject = document.getElementsByClassName(thisClass);
            for (let i = 0; i < thisProject.length; i++) {
                thisProject[i].style.display = "flex";
            };
            listed.style.display = "flex";
        });
    };

    projectSubmit.addEventListener("click", projectSubmitClick, false);

    function projectSubmitClick (event) {
        event.preventDefault();
        let projectName = document.querySelector("#projectName").value;
        if (projectName == "" || projectName.match(/^\s|\s$/)) {
            return false;
        }
        else {
            projectArray.push(projectName);
            listProject ();
            projectForm.style.display = "none";
            projectForm.reset();
        };
    };

    function getTaskList () {
        let allProjects = projectDisplay.children;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].style.display === "flex") {
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
        taskList.style.display = "flex";
    };
};