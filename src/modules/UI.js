import { clearTasks, renderTasks } from "../script";
import "./../styles/style.scss";
import Task from "./task.js";
import { taskData, selectedProject } from "./taskData.js";
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


  // Task Side DOM Selection
  const addNewTaskButton = document.querySelector(".add-new-tasks__button");
  const newTasksForm = document.querySelector(".add-new-tasks__form");
  const cancelForTask = document.querySelector(
    ".add-new-tasks__button--cancel"
  );
  const addTaskForm = document.querySelector(".add-new-tasks__form");
  const addTaskInputArea = document.querySelector(
    ".add-new-tasks__input--text"
  );


  // Others 
  const forms = document.querySelectorAll("form");

  const renderTaskList = () => {};
  const renderProjectList = () => {};




  // ----------------------------------- HELPER FUNCTIONS--------------------------------

  const clearScreen = () => {
    document.querySelector(".task-lists").innerHTML = "";
  }

  const activateEventListeners = () => {
    document.body.addEventListener("click", (e) => {
      handleClick(e);
    });

    for (let form of forms) {
	form.addEventListener("submit", (e)=>{
		e.preventDefault();
		handleClick(e);
	});
    }
    
  };
  const handleClick = (e) => {
    if (e.target.classList.contains("add-task")) showTaskForm();
    else if (e.target.classList.contains("add-project")) showProjectForm();
    else if (e.target.classList.contains("cancel-button-task")) hideTaskForm();
    else if (e.target.classList.contains("cancel-button-project")) hideProjectForm();
    else if (e.target.classList.contains("submit-task")) submitTask();
    else if (e.target.classList.contains("submit-project")) submitProject();
  };

  const submitTask = () => {
    /*
      update taskData
      update localStorage
      re-render page
      
    */
    
    let newTask = new Task(addTaskInputArea.value)
    // updateTaskData(newTask);
    // refreshLocalStorage();



    hideTaskForm();

  }

  const submitProject = () => {
	console.log("Project Submitted");
  hideProjectForm();

  }
  const showTaskForm = () => {
    newTasksForm.style.visibility = "visible";
    addNewTaskButton.style.visibility = "hidden";
    addTaskInputArea.focus();
  }
  const showProjectForm = () => {
    newProjectForm.style.visibility = "visible";
    addNewProjectButton.style.visibility = "hidden";
    addProjectInputArea.focus();
  }

  const hideProjectForm = () => {
    newProjectForm.style.visibility = "hidden";
    addNewProjectButton.style.visibility = "visible";
  }

  const hideTaskForm = () => {
    newTasksForm.style.visibility = "hidden";
    addNewTaskButton.style.visibility = "visible";
  }
// -----------------------------------------/ HELPER FUNCTIONS /------------------------------------------------------




  const renderPage = (() => {
    clearScreen();
    refreshTaskData();

    renderProjectList();
    renderTaskList();

    activateEventListeners();

    // changeHeading();
  })();
})();

