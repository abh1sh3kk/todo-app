import { hideProjectForm, hideTaskForm, showProjectForm, showTaskForm } from "./formVisibility";
import { removeProject, removeTask } from "./removers";

const handleClick = (e) => {
    const listOfClass = e.target.classList;
    for (let class_ of listOfClass) {
        switch (class_) {
            case "add-task":
                showTaskForm();
                break;
            case "add-project":
                showProjectForm();
                break;
            case "cancel-button-task":
                hideTaskForm();
                break;
            case "cancel-button-project":
                hideProjectForm();
                break;
            case "submit-task":
                submitTask(e);
                break;
            case "submit-project":
                submitProject(e);
                break;
            case "remove":
                removeTask(e);
                break;
            case "remove_project":
                removeProject(e);
                break;
            default:
                break;

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

const handleKeyboardShortcuts = (e) => {
    if (e.key.toLowerCase() == "t" && e.altKey) showTaskForm();
    else if (e.key.toLocaleLowerCase() == "p" && e.altKey) showProjectForm();
    else if (e.key == "Escape") hideProjectForm() || hideTaskForm();
};

const appendToTaskList = (newTask) => {
    listContainer.appendChild(newTask);
};

const appendToProjectList = (newProject) => {
    customProjectList.appendChild(newProject);
};

const displayEmptyMessage = () => {
    console.log("Task: Clear screen and display empty message");
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

const updateTaskData = (newValue, selector) => {
    switch (selector) {
        case "task":
            TaskData.addNewTask(newValue);
            break;
        case "project":
            TaskData.addNewProject(newValue);
            break;

        default:
            console.log(`Selector is wrong: ${selector}, ${newValue}`);
    }
};

export {
    handleClick,
    handleKeyboardShortcuts,
    appendToProjectList,
    displayEmptyMessage,
    updateTaskData,
    appendToTaskList,
};
