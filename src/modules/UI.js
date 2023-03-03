import "./../styles/style.scss";
import Task from "./task.js";
import Project from "./project.js";
import { TaskData } from "./taskData.js";
import { refreshTaskData, refreshLocalStorage, clearLocalStorage, initializeLocalStorage } from "./localStorage.js";
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
  const removeProjectIcons = document.querySelectorAll(".heading-icon_img");
  

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
    // selectedProjectInit();

    if (TaskData.isEmpty()) return;

    if (TaskData.selectedProject.length < 1) return;

    let requiredProject = TaskData.data.find(
      (value) => value.projectTitle == TaskData.selectedProject
    );

    requiredProject.taskList.forEach(renderEachTask);
  };


  const selectedProjectInit = () => {
    // TaskData.selectedProject = TaskData.data[0].projectTitle;

    TaskData.setSelectedProject(TaskData.data[0].projectTitle);
  };


  const renderProjectList = () => {
    clearProjects();

    if (TaskData.isEmpty()) return ;


    let projectArray = TaskData.data.map((project) => project.projectTitle);
    projectArray.forEach(renderEachProject);

    if (TaskData.isEmpty()){
      
    }
  };


  const renderEachTask = (task_) => {
    let newTask = new Task(task_.theTask, task_.isCompleted, task_.dueDate);
    listContainer.appendChild(newTask.createOneTask());
  };

  const renderEachProject = (item) => {
    let newProject = new Project(item);
    customProjectList.appendChild(newProject.createOneProject());
  };



  const removeProjectFromUI = (e) => {
    e.target.parentElement.parentElement.remove();

    console.log(TaskData);

    // if (TaskData.isEmpty()) {
    //   console.log("TaskData is empty")
    //   displayEmptyMessage();
    //   // loadAllTasks();
    //   console.log("UI.js 87 .. load all tasks now")
    // }


  }


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

  const displayEmptyMessage = () => {
    console.log("Task: Clear screen and display empty message");
  }


  const removeProject = (e) => {

    removeProjectFromTaskData(e);
    
    refreshLocalStorage();

    removeProjectFromUI(e);

    // console.log(`Remove Project fn is called ${TaskData.data.slice(TaskData.getSelectedProjectIndex(), 1)}`)
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
    // const projectIndex = TaskData.getSelectedProjectIndex();

    // // slice if enough data in TaskData
    // if (TaskData.length >  projectIndex) TaskData.setData(TaskData.data.slice(projectIndex, 1));
    // else console.log("Slice couldn't be done.. UI:119");

    // // if TaskData is empty
    // if (TaskData.length > 0) TaskData.setSelectedProject(TaskData.data[0].projectTitle); 
    // else displayEmptyMessage();

    const projectToRemove = e.target.parentElement.previousElementSibling.textContent;
    const indexToRemove = TaskData.findProjectIndex(projectToRemove);
    TaskData.setData(TaskData.data.slice(indexToRemove, 1));

    
  };



  const removeTaskElement = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  const removeProjectElement = (e) => {
  // customProjectList.childNodes[TaskData.getSelectedProjectIndex()].remove();
  console.log(customProjectList)
  };



  const appendToTaskList = (newTask) => {
    listContainer.appendChild(newTask);
  };
  const appendToProjectList = (newProject) => {
    customProjectList.appendChild(newProject);
  };

  // document.addEventListener("DOMContentLoaded", () => {
  //   let projectIcon = document.querySelector(".heading-icon_img");
  //   // console.log(document.querySelectorAll(".custom-project"))
  //   let projectList = document.querySelectorAll(".custom-project");
  //    projectList.forEach(project => {
  //     project.addEventListener("mouseover", () => {
  //       projectIcon.classList.add("colorize-white");
  //     })
  //     project.addEventListener("mouseout", () => {
  //       projectIcon.classList.remove("colorize-white");
  //     })
  //    })
  // document.body.addEventListener("mouseover", (e) => {
  //   let projectIcon = document.querySelector(".heading-icon_img");
  //   // console.log(document.querySelectorAll(".custom-project"))
  //   let projectList = document.querySelectorAll(".custom-project");
  

    


  // })
  // customProjectList.addEventListener("mouseover", () => {
  //   // removeProjectIcon.classList.add("colorize-white");
  //   document.querySelector(".heading-icon_img").classList.add("colorize-white");
  // })
  // customProjectList.addEventListener("mouseout", () => {
  //   //  removeProjectIcon.classList.remove("colorize-white");
  //   document.querySelector(".heading-icon_img").classList.remove("colorize-white");
  // })


  const clearProjects = () => {
    customProjectList.innerHTML = "";
  };

  const clearScreen = () => {
    document.querySelector(".task-lists").innerHTML = "";
  };




  const updateTaskData = (newValue, selector) => {
    switch (selector) {
      case 'task': 
        TaskData.addNewTask(newValue);
        break;
      case 'project': 
        TaskData.addNewProject(newValue);
        break;

      default: 
        console.log(`Selector is wrong: ${selector}, ${newValue}`)
    }

  };




  const activateEventListeners = () => {
    document.body.addEventListener("click", (e) => { handleClick(e) });
    document.addEventListener("keydown", (e) => { handleKeyboardShortcuts(e) });
  };




  const handleClick = (e) => {


    const listOfClass = e.target.classList;
    for (let class_ of listOfClass) {
        switch (class_){
          case 'add-task': showTaskForm(); break;
          case 'add-project':  showProjectForm(); break;
          case 'cancel-button-task': hideTaskForm(); break;
          case 'cancel-button-project':  hideProjectForm(); break;
          case 'submit-task':  submitTask(e); break;
          case 'submit-project': submitProject(e); break;
          case 'remove': removeTask(e); break;
          case 'remove_project': removeProject(e); break;
          default: break;

    // if (e.target.classList.contains("add-task"))                       showTaskForm();
    // else if (e.target.classList.contains("add-project"))               showProjectForm();
    // else if (e.target.classList.contains("cancel-button-task"))        hideTaskForm();
    // else if (e.target.classList.contains("cancel-button-project"))     hideProjectForm();
    // else if (e.target.classList.contains("submit-task"))               submitTask(e);
    // else if (e.target.classList.contains("submit-project"))            submitProject(e);
    // else if (e.target.classList.contains("remove"))                    removeTask(e);
    // else if (e.target.classList.contains("remove_project"))            removeProject(e);


        }
    }
  };

  const submitTask = (e) => {
    e.preventDefault();
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

  const submitProject = (e) => {
    e.preventDefault();
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

  const isFirstTime = () => {
    console.log(localStorage.getItem('taskData').length);
  }

  // -----------------------------------------/ DRIVER CODE /------------------------------------------------------

  const renderPage = (() => {
    initializeLocalStorage();

    refreshTaskData();

    renderProjectList();
    renderTaskList();

    activateEventListeners();
  })();
})();