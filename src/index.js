const Task = (title, description, dueDate, priority) => {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
};

function createProject () {
    const projectArray = [];

    const sidebar = document.getElementById("sidebar");

    const newProject = document.createElement("button");
    newProject.id = "newProject";
    newProject.textContent = "Create new project";
    sidebar.appendChild(newProject);

    newProject.addEventListener('click', () => {
        const projectForm = document.getElementById("projectForm");
        projectForm.style.display = "block";
    });

    const projectSubmit = document.getElementById("projectSubmit");

    projectSubmit.addEventListener("click", projectSubmitClick, false);

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

    function projectSubmitClick (event) {
        let projectName = document.querySelector("#projectName").value;
        event.preventDefault();
        projectArray.push(projectName);
        listProject ();
    };
};

createProject();