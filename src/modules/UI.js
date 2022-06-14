import "./../styles/style.scss";
import Task from "./task.js";
import Project from "./project.js";
import { TaskData } from "./taskData.js";
import {
  refreshTaskData,
  refreshLocalStorage,
  clearLocalStorage,
} from "./localStorage.js";
import { taskSwitcher } from "./taskSwitcher.js";

const UI = (() => {
  // Project Side DOM Selection
  const addNewProjectButton = document.querySelector(
    ".add-new-projects__button"
  );
  const newProjectForm = document.querySelector(".add-new-projects__form");
  const cancelForProject = document.querySelector(
    ".add-new-projects__button--cancel"
  );
  const addProjectForm = document.querySelector(".add-new-projects__form");
  const addProjectInputArea = document.querySelector(
    ".add-new-projects__input--text"
  );
  const customProjectList = document.querySelector(".custom-project-list-ul");

  // Task Side DOM Selection
  const addNewTaskButton = document.querySelector(".add-new-tasks__button");
  const newTasksForm = document.querySelector(".add-new-tasks__form");
  const cancelForTask = document.querySelector(
    ".add-new-tasks__button--cancel"
  );
  const listContainer = document.querySelector(".task-lists");
  const addTaskForm = document.querySelector(".add-new-tasks__form");
  const addTaskInputArea = document.querySelector(
    ".add-new-tasks__input--text"
  );

  // Others
  const forms = document.querySelectorAll("form");

  const renderTaskList = () => {
    selectedProjectInit();

    let requiredProject = TaskData.data.find(
      (value) => value.projectTitle == TaskData.selectedProject
    );

    requiredProject.taskList.forEach(renderEachTask);

    console.table(requiredProject.taskList);
  };
  const selectedProjectInit = () => {
    TaskData.selectedProject = TaskData.data[0].projectTitle;
  };
  const renderProjectList = () => {
    clearProjects();
    let projectArray = TaskData.data.map((project) => project.projectTitle);
    projectArray.forEach(renderEachProject);
  };

  const renderEachTask = (task_) => {
          let newTask = new Task(task_.theTask, task_.isCompleted, task_.dueDate);
        listContainer.appendChild(newTask.createOneTask());
  }

  const renderEachProject = (item) => {
    let newProject = new Project(item);
    customProjectList.appendChild(newProject.createOneProject());
  };

  // ----------------------------------- HELPER FUNCTIONS--------------------------------

  const clearProjects = () => {
    customProjectList.innerHTML = "";
  };
  const clearScreen = () => {
    document.querySelector(".task-lists").innerHTML = "";
  };

  const updateTaskData = (newTask) => {
    console.log("Hi")
  }

  const activateEventListeners = () => {
    document.body.addEventListener("click", (e) => {
      handleClick(e);
    });

    for (let form of forms) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleClick(e);
      });
    }
  };
  const handleClick = (e) => {
    if (e.target.classList.contains("add-task")) showTaskForm();
    else if (e.target.classList.contains("add-project")) showProjectForm();
    else if (e.target.classList.contains("cancel-button-task")) hideTaskForm();
    else if (e.target.classList.contains("cancel-button-project"))
      hideProjectForm();
    else if (e.target.classList.contains("submit-task")) submitTask();
    else if (e.target.classList.contains("submit-project")) submitProject();
  };

  const submitTask = () => {
    /*
      update taskData
      update localStorage
      re-render page
      
    */

    let newTask = new Task(addTaskInputArea.value);
    updateTaskData(newTask);
    // refreshLocalStorage();

    hideTaskForm();
  };

  const submitProject = () => {
    console.log("Project Submitted");
    hideProjectForm();
  };
  const showTaskForm = () => {
    newTasksForm.style.visibility = "visible";
    addNewTaskButton.style.visibility = "hidden";
    addTaskInputArea.focus();
  };
  const showProjectForm = () => {
    newProjectForm.style.visibility = "visible";
    addNewProjectButton.style.visibility = "hidden";
    addProjectInputArea.focus();
  };

  const hideProjectForm = () => {
    newProjectForm.style.visibility = "hidden";
    addNewProjectButton.style.visibility = "visible";
  };

  const hideTaskForm = () => {
    newTasksForm.style.visibility = "hidden";
    addNewTaskButton.style.visibility = "visible";
  };
  // -----------------------------------------/ HELPER FUNCTIONS /------------------------------------------------------

  const renderPage = (() => {
    clearScreen();
    clearProjects();

    refreshTaskData();
    // refreshLocalStorage();

    renderProjectList();
    renderTaskList();

    activateEventListeners();

    // changeHeading();
  })();
})();