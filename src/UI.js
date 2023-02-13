import taskGenerator from './task.js';
export default function buttons () {
    const projectArray = [];
    const sidebar = document.getElementById("sidebar");
    const projectForm = document.getElementById("projectForm");
    const projectCancel = document.getElementById("projectCancel");
    const projectSubmit = document.getElementById("projectSubmit");

    const newProjectButton = (() => {
        const newProject = document.createElement("button");
        newProject.id = "newProject";
        newProject.textContent = "Create new project";
        sidebar.appendChild(newProject);
        newProject.addEventListener("click", () => {
            projectForm.style.display = "block";
        });
    })();

    function newTaskButton (parent) {
        const newTask = document.createElement("button");
        newTask.classList.add("newTaskButtons");
        parent.appendChild(newTask);
        newTask.textContent = "Add new task";
        newTask.addEventListener("click", () => {
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
        listed.textContent = newProject;
        listed.classList.add(newProject);

        let projectDisplay = document.getElementById("projectDisplay");
        let projectDiv = document.createElement("div");
        projectDisplay.appendChild(projectDiv);
        projectDiv.classList.add(newProject);
        projectDiv.style.display = "none";
        newTaskButton(projectDiv);

        //taskGenerator is a method from the task module
        let taskList = document.createElement("div");
        projectDiv.appendChild(taskList);
        taskGenerator(taskList);

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
};