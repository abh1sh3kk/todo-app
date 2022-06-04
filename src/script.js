import "./styles/style.scss";
import { createOneTask } from "./modules/createOneTask.js";


let defaultProjects = document.querySelectorAll(".default-project");
let customProjects = document.querySelectorAll(".custom-project");
let projectHeading = document.querySelector(".project-heading");
let allProjects = document.querySelectorAll("li");

let lists = document.querySelector(".lists");
let labels = document.querySelectorAll("label");

const addNewProjectButton = document.querySelector(".add-new-project-button");
const addNewTaskButton = document.querySelector(".add-new-task-button");
const newTaskForm = document.querySelector(".insert-new-task");
const newProjectForm = document.querySelector(".input-area-add-new-project");

let taskData = [
  {
    projectTitle: "College",
    taskList: [
      {
        theTask: "Solve Coding Problems",
        dueDate: "2015-03-12",
        taskCompleted: false,
      },
      {
        theTask: "Finish Assignments",
        dueDate: "2015-03-12",
        taskCompleted: false,
      },
      {
        theTask: "Cook chicken",
        dueDate: "2015-03-12",
        taskCompleted: true,
      },
    ],
  },
  {
    projectTitle: "Assignments",
    taskList: [
      {
        theTask: "Make  	a beautiful girlfriend",
        dueDate: "2015-03-12",
        taskCompleted: true,
      },
      {
        theTask: "Win a lottery of $10 million",
        dueDate: "2015-03-12",
        taskCompleted: true,
      },
      {
        theTask: "Be like a genius",
        dueDate: "2015-03-12",
        taskCompleted: true,
      },
    ],
  },
];
let selectedProject = taskData[0];
// -----------------------------------------------------------------------------------------
			// PLAYGROUND

addNewTaskButton.addEventListener("click", ()=>{
	newTaskForm.visibility = "visible";
	addNewTaskButton.visibility = "hidden";
});



// -----------------------------------------------------------------------------------------






// render tasks when page loads 
renderTasks();


// ______________________________________________________________________________________



// EventListener for default projects
defaultProjects.forEach(defaultProject => { 
	//  FOR DEFAULT PROJECTS
	defaultProject.addEventListener("click", (e)=>{
		navigateDefault(e);
		updateActiveButton(e);
	});
})


	//  EventListener FOR CUSTOM PROJECTS
customProjects.forEach(customProject => {
	customProject.addEventListener("click", (e)=>{
		updateSelectedProject(e);
		updateActiveButton(e);
		console.log(selectedProject.projectTitle);
		renderTasks();
	})
})























// -----------------------------------------------------------------------------------------
function updateActiveButton(e) {
	allProjects.forEach(eachProject=> {
		eachProject.classList.remove("active");
		eachProject.classList.remove("d-active");
		
	});
	if(e.target.classList[0] == "default-project")
		e.target.classList.add("d-active");
	else
		e.target.classList.add("active");
}
// C
function updateSelectedProject(e) {
	for (let project of taskData) {
		if (e.target.textContent == project.projectTitle)
			selectedProject = project;
	}
}

// D
function navigateDefault(e) {
	switch(e.target.id) {
		case "all_tasks": 
			loadAllTasks();
			break;
		case "today": 
			console.log("I am today");
			break;
		case "important": 
			console.log("I am important");
			break;
		default: 
		console.log("I am no one")
	}
}

// D
function loadAllTasks() {
	clearTasks();
	projectHeading.textContent = "All tasks";

	// entering inside the array of projects [{A}, {B}, {C}]
	for (let [project_index, project_] of taskData.entries()) {

	// entering inside every taskLists [{title: "college", taskList: [{A}, {B}] }]
	    for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
	      lists.appendChild(createOneTask(project_index, taskObj_index, taskObj_.theTask, taskObj_.dueDate));
	  }
	}
}

// CD
function clearTasks() {
	lists.textContent = "";
}
// CD
function renderTasks() {
	clearTasks();
	changeHeading();

	// entering inside the array of projects [{A}, {B}, {C}]
	 for (let [project_index, project_] of taskData.entries()) {

	// { title: "A" , task... }, {title: "B", task...}
	  if (selectedProject.projectTitle == project_.projectTitle) {

		// {title: "college", taskList: [{A}, {B}, {C}]}
	    for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
	      lists.appendChild(createOneTask(project_index, taskObj_index, taskObj_.theTask, taskObj_.dueDate));
	    }
	  }
	}
	 
}

// CD
function changeHeading() {
	projectHeading.textContent = selectedProject.projectTitle;
}		