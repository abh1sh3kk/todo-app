import "./../styles/style.scss";
import Task from "./task.js";
import Project from "./project.js";
import { TaskData } from "./taskData.js";
import { refreshTaskData, refreshLocalStorage, clearLocalStorage } from "./localStorage.js";
import { taskSwitcher } from "./taskSwitcher.js";
import { remove } from "./removeProject.js"


const UI = (() => {
  // Project Side DOM Selection
  const addNewProjectButton = document.querySelector(".add-new-projects__button");
  const newProjectForm = document.querySelector(".add-new-projects__form");
  const cancelForProject = document.querySelector(".add-new-projects__button--cancel");
  const addProjectForm = document.querySelector(".add-new-projects__form");
  const addProjectInputArea = document.querySelector(".add-new-projects__input--text");
  const customProjectList = document.querySelector(".custom-project-list-ul");

  // Task Side DOM Selection
  const addNewTaskButton = document.querySelector(".add-new-tasks__button");
  const newTasksForm = document.querySelector(".add-new-tasks__form");
  const cancelForTask = document.querySelector(".add-new-tasks__button--cancel");
  const listContainer = document.querySelector(".task-lists");
  const addTaskForm = document.querySelector(".add-new-tasks__form");
  const addTaskInputArea = document.querySelector(".add-new-tasks__input--text");

  // Others
  const forms = document.querySelectorAll("form");



  const renderTaskList = () => {
    selectedProjectInit();

    let requiredProject = TaskData.data.find(
      (value) => value.projectTitle == TaskData.selectedProject
    );

    requiredProject.taskList.forEach(renderEachTask);
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
  };

  const renderEachProject = (item) => {
    let newProject = new Project(item);
    customProjectList.appendChild(newProject.createOneProject());
  };



  // ----------------------------------- HELPER FUNCTIONS--------------------------------
  const handleKeyboardShortcuts = (e) => {
    if (e.key.toLowerCase() == "t" && e.altKey) showTaskForm();
    else if (e.key.toLocaleLowerCase() == "p" && e.altKey) showProjectForm();
    else if (e.key == 'Escape') hideProjectForm() || hideTaskForm();
  };



  const removeTask = (e) => {
    removeTaskFromTaskData(e);
    refreshLocalStorage();
    removeTaskElement(e);
  };

  const removeProject = (e) => {
    // removeProjectFromTaskData(e);
    // refreshLocalStorage();
    // removeProjectElement(e);
    console.log(`Remove Project fn is called ${TaskData.data.slice(TaskData.getSelectedProjectIndex(), 1)}`)
  }



  const removeTaskFromTaskData = (e) => {
    let textToRemove =
      e.target.parentElement.previousElementSibling.lastElementChild
        .textContent;
    let tasksOfSelectedProject = TaskData.data[
      TaskData.getSelectedProjectIndex()
    ].taskList.map((task_) => task_.theTask);
    let indexOfTTR = tasksOfSelectedProject.indexOf(textToRemove);

    console.log(
      TaskData.data[TaskData.getSelectedProjectIndex()].taskList.splice(
        indexOfTTR,
        1
      )
    );
  };

  const removeProjectFromTaskData = (e) => {
    console.log(TaskData.data.slice(TaskData.getSelectedProjectIndex(), 1));

  };



  const removeTaskElement = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  const removeProjectElement = (e) => {
  customProjectList.childNodes[TaskData.getSelectedProjectIndex()].remove();
  };



  const appendToTaskList = (newTask) => {
    listContainer.appendChild(newTask);
  };
  const appendToProjectList = (newProject) => {
    customProjectList.appendChild(newProject);
  };




  const clearProjects = () => {
    customProjectList.innerHTML = "";
  };

  const clearScreen = () => {
    document.querySelector(".task-lists").innerHTML = "";
  };




  const updateTaskData = (newValue, selector) => {
    if (selector === "task") {
      TaskData.addNewTask(newValue);
    } else if (selector === "project") {
      TaskData.addNewProject(newValue);
    } else;
    console.log(TaskData.data);
  };




  const activateEventListeners = () => {
    // any click in body will be handled
    document.body.addEventListener("click", (e) => {
      handleClick(e);
    });

    // any keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      handleKeyboardShortcuts(e);
    });

    // any form submit will be handled
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
    else if (e.target.classList.contains("cancel-button-project")) hideProjectForm();
    else if (e.target.classList.contains("submit-task")) submitTask();
    else if (e.target.classList.contains("submit-project")) submitProject();
    else if (e.target.classList.contains("remove")) removeTask(e);
    else if (e.target.classList.contains("remove_project")) removeProject(e);
  };




  const submitTask = () => {
    let inputValue = addTaskInputArea.value;
    let existingTasks = TaskData.data[
      TaskData.getSelectedProjectIndex()
    ].taskList.map(task_ => task_.theTask);

    if (inputValue.length < 2 || existingTasks.includes(inputValue)) {
      alert("Input can't be repeated and can't be less than 2 letters");
    } else {
      let newTask = new Task(addTaskInputArea.value);
      updateTaskData(newTask, "task");
      refreshLocalStorage();
      appendToTaskList(newTask.createOneTask());
    }

    hideTaskForm();

    // if (inputValue.length > 1) {
    //   let newTask = new Task(addTaskInputArea.value);
    //   updateTaskData(newTask, "task");
    //   refreshLocalStorage();
    //   appendToTaskList(newTask.createOneTask());
    // }
  };

  const submitProject = () => {
    let newProject = new Project(addProjectInputArea.value);
    updateTaskData(newProject, "project");
    refreshLocalStorage();
    appendToProjectList(newProject.createOneProject());
    hideProjectForm();
  };



  const showTaskForm = () => {
    newTasksForm.style.visibility = "visible";
    addNewTaskButton.style.visibility = "hidden";
    newTasksForm.reset();
    addTaskInputArea.focus();
    hideProjectForm();
  };

  const showProjectForm = () => {
    newProjectForm.style.visibility = "visible";
    addNewProjectButton.style.visibility = "hidden";
    newProjectForm.reset();
    addProjectInputArea.focus();
    hideTaskForm();
  };




  const hideProjectForm = () => {
    newProjectForm.style.visibility = "hidden";
    addNewProjectButton.style.visibility = "visible";
  };
  const hideTaskForm = () => {
    newTasksForm.style.visibility = "hidden";
    addNewTaskButton.style.visibility = "visible";
  };

  // -----------------------------------------/ DRIVER CODE /------------------------------------------------------

  const renderPage = (() => {
    refreshTaskData();
    // refreshLocalStorage();

    renderProjectList();
    renderTaskList();

    activateEventListeners();
  })();
})();