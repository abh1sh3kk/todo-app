// import "./styles/style.scss";
// import { createOneTask } from "./modules/createOneTask.js";

// let defaultProjects = document.querySelectorAll(".default-project");
// let customProjects = document.querySelectorAll(".custom-project");
// let projectHeading = document.querySelector(".project-heading");
// let allProjects = document.querySelectorAll("li");

// let lists = document.querySelector(".task-lists");
// let labels = document.querySelectorAll("label");

// let taskData = [
//   {
//     projectTitle: "Web Development",
//     taskList: [
//       {
//         theTask: "Solve Coding Problems",
//         dueDate: "2015-03-12",
//         taskCompleted: false,
//       },
//       {
//         theTask: "Finish Projects",
//         dueDate: "2015-03-12",
//         taskCompleted: false,
//       },
//       {
//         theTask: "Refactor",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//     ],
//   },
//   {
//     projectTitle: "College",
//     taskList: [
//       {
//         theTask: "Complete assesments",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//       {
//         theTask: "Message your crush",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//       {
//         theTask: "Sleep",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//     ],
//   },
// ];
// let taskDataNew = {
//   college: {
//     projectTitle: "Web Development",
//     taskList: [
//       {
//         theTask: "Solve Coding Problems",
//         dueDate: "2015-03-12",
//         taskCompleted: false,
//       },
//       {
//         theTask: "Finish Projects",
//         dueDate: "2015-03-12",
//         taskCompleted: false,
//       },
//       {
//         theTask: "Refactor",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//     ],
//   },
//   Assignments: {
//     projectTitle: "College",
//     taskList: [
//       {
//         theTask: "Complete assesments",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//       {
//         theTask: "Message your crush",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//       {
//         theTask: "Sleep",
//         dueDate: "2015-03-12",
//         taskCompleted: true,
//       },
//     ],
//   },
// };
// let selectedProject = taskDataNew["college"];

// // -----------------------------------------------------------------------------------------
// // Manipulating data from taskData

// function updateTaskData() {
//   console.log("hi");
//   // taskData.push(new object created by passing (task and completedStatus))
//   selectedProject.taskList.push(new taskLine("This is the task", true));
//   console.log("Pushed", selectedProject);
// }

// class taskLine {
//   constructor(theTask = "", taskCompleted = "false", dueDate = "No Date") {
//     this.theTask = theTask;
//     this.taskCompleted = taskCompleted;
//     this.dueDate = dueDate;
//   }
// }

// // -----------------------------------------------------------------------------------------
// // Add data

// //  showProjctForm(), hideProjectForm(), performSubmit(e), submitAction(), hideTAskForm(), updateTaskData(),
// // -----------------------------------------------------------------------------------------
// // PROJECT SIDE
// const addNewProjectButton = document.querySelector(".add-new-projects__button");

// const newProjectForm = document.querySelector(".add-new-projects__form");
// const cancelForProject = document.querySelector(
//   ".add-new-projects__button--cancel"
// );
// const addProjectForm = document.querySelector(".add-new-projects__form");
// const addProjectInputArea = document.querySelector(
//   ".add-new-projects__input--text"
// );

// addNewProjectButton.addEventListener("click", () => {
//   showProjectForm();
// });
// cancelForProject.addEventListener("click", (e) => {
//   e.preventDefault();
//   hideProjectForm();
// });
// addProjectForm.addEventListener("submit", (e) => {
//   performSubmit(e);
// });

// function performSubmit(e) {
//   e.preventDefault();
//   submitAction();
//   hideProjectForm();
//   hideTaskForm();
// }

// function showProjectForm() {
//   newProjectForm.style.visibility = "visible";
//   addNewProjectButton.style.visibility = "hidden";
//   addProjectInputArea.focus();
// }
// function hideProjectForm() {
//   newProjectForm.style.visibility = "hidden";
//   addNewProjectButton.style.visibility = "visible";
// }
// function submitAction() {
//   console.log(addProjectInputArea.value);
//   updateDataBase();
//   updateTaskData();
// }

// // -----------------------------------------------------------------------------------------
// // UPDATE DATABASE

// function updateDataBase() {
//   console.log("Database is updated");
// }

// // -----------------------------------------------------------------------------------------
// // TASK SIDE
// const addNewTaskButton = document.querySelector(".add-new-tasks__button");
// const newTasksForm = document.querySelector(".add-new-tasks__form");
// const cancelForTask = document.querySelector(".add-new-tasks__button--cancel");
// const addTaskForm = document.querySelector(".add-new-tasks__form");
// const addTaskInputArea = document.querySelector(".add-new-tasks__input--text");

// addNewTaskButton.addEventListener("click", () => {
//   showTaskForm();
// });
// cancelForTask.addEventListener("click", (e) => {
//   e.preventDefault();
//   hideTaskForm();
// });
// addTaskForm.addEventListener("submit", (e) => {
//   performSubmit(e);
// });

// function showTaskForm() {
//   newTasksForm.style.visibility = "visible";
//   addNewTaskButton.style.visibility = "hidden";
//   addTaskInputArea.focus();
// }
// function hideTaskForm() {
//   newTasksForm.style.visibility = "hidden";
//   addNewTaskButton.style.visibility = "visible";
// }
// // -----------------------------------------------------------------------------------------

// // -----------------------------------------------------------------------------------------

// // render tasks when page loads
// renderTasks();

// // ______________________________________________________________________________________

// // EventListener for default projects
// defaultProjects.forEach((defaultProject) => {
//   //  FOR DEFAULT PROJECTS
//   defaultProject.addEventListener("click", (e) => {
//     navigateDefault(e);
//     updateActiveButton(e);
//   });
// });

// //  EventListener FOR CUSTOM PROJECTS
// customProjects.forEach((customProject) => {
//   customProject.addEventListener("click", (e) => {
//     updateSelectedProject(e);
//     updateActiveButton(e);
//     console.log(selectedProject.projectTitle);
//     renderTasks();
//   });
// });

// // -----------------------------------------------------------------------------------------
// function updateActiveButton(e) {
//   allProjects.forEach((eachProject) => {
//     eachProject.classList.remove("active");
//     eachProject.classList.remove("d-active");
//   });
//   if (e.target.classList[0] == "default-project")
//     e.target.classList.add("d-active");
//   else e.target.classList.add("active");
// }
// function updateSelectedProject(e) {
//   for (let project of taskData) {
//     if (e.target.textContent == project.projectTitle) selectedProject = project;
//   }
// }

// function navigateDefault(e) {
//   switch (e.target.id) {
//     case "all_tasks":
//       loadAllTasks();
//       break;
//     case "today":
//       console.log("I am today");
//       break;
//     case "important":
//       console.log("I am important");
//       break;
//     default:
//       console.log("I am no one");
//   }
// }

// function loadAllTasks() {
//   clearTasks();
//   projectHeading.textContent = "All tasks";

//   for (let project_ in taskDataNew) {
//     for (let task_ of project_.taskList) {
//       lists.appendChild(
//         createOneTask(task_.theTask, task_.taskCompleted, task_.dueDate)
//       );
//     }
//   }

//   // // entering inside the array of projects [{A}, {B}, {C}]
//   // for (let [project_index, project_] of taskData.entries()) {
//   //   // entering inside every taskLists [{title: "college", taskList: [{A}, {B}] }]
//   //   for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
//   //     lists.appendChild(
//   //       createOneTask(
//   //         project_index,
//   //         taskObj_index,
//   //         taskObj_.theTask,
//   //         taskObj_.dueDate
//   //       )
//   //     );
//   //   }
//   // }
// }
// function changeHeading() {
//   projectHeading.textContent = selectedProject.projectTitle;
// }
// export function renderTasks() {
//   clearTasks();
//   changeHeading();

//   for (let taskObj_ of selectedProject.taskList) {
//     lists.appendChild(
//       createOneTask(taskObj_.theTask, taskObj_.taskCompleted, taskObj_.dueDate)
//     );
//   }

//   // // entering inside the array of projects [{A}, {B}, {C}]
//   // for (let [project_index, project_] of taskData.entries()) {
//   //   // { title: "A" , task... }, {title: "B", task...}
//   //   if (selectedProject.projectTitle == project_.projectTitle) {
//   //     // {title: "college", taskList: [{A}, {B}, {C}]}
//   //     for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
//   //       lists.appendChild(
//   //         createOneTask(
//   //           project_index,
//   //           taskObj_index,
//   //           taskObj_.theTask,
//   //           taskObj_.dueDate
//   //         )
//   //       );
//   //     }
//   //   }
//   // }
// }

// export function clearTasks() {
//   lists.textContent = "";
// }
