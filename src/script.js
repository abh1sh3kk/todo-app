import "./styles/style.scss";
let lists = document.querySelector(".lists");
let labels = document.querySelectorAll("label");
let defaultProjects = document.querySelectorAll(".default-project");
let customProjects = document.querySelectorAll(".custom-project");
let projectHeading = document.querySelector(".project-heading");

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
let selectedProject = taskData[1];
// -----------------------------------------------------------------------------------------

renderTasks();


// ______________________________________________________________________________________


//  FOR DEFAULT PROJECTS
defaultProjects.forEach(defaultProject => { 
	//  FOR DEFAULT PROJECTS
	
	defaultProject.addEventListener("click", (e)=>{
		navigateDefault(e);
	});
})
	//  FOR CUSTOM PROJECTS
customProjects.forEach(customProject => {
	customProject.addEventListener("click", (e)=>{
		updateSelectedProject(e);
		console.log(selectedProject.projectTitle);
		renderTasks();
	})
})














// -----------------------------------------------------------------------------------------
function updateSelectedProject(e) {
	for (let project of taskData) {
		if (e.target.textContent == project.projectTitle)
			selectedProject = project;
	}
}
function navigateDefault(e) {
	switch(e.target.id) {
		case "all_tasks": 
			loadAllTasks();
			console.log("I am all tasks");
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

function loadAllTasks() {
	clearTasks();
	focusActive();

	// entering inside the array of projects [{A}, {B}, {C}]
	for (let [project_index, project_] of taskData.entries()) {

	// entering inside every taskLists [{title: "college", taskList: [{A}, {B}] }]
	    for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
	      lists.appendChild(createOneTask(project_index, taskObj_index, taskObj_.theTask, taskObj_.dueDate));
	  }
	}
}
function clearTasks() {
	lists.textContent = "";
}
function renderTasks() {
	// console.log("Before clearing");
	clearTasks();
	// console.log("After clearing");
	focusActive();

	// entering inside the array of projects [{A}, {B}, {C}]
	 for (let [project_index, project_] of taskData.entries()) {

	// { title: "A" , task... }, {title: "B", task...}
	  if (selectedProject.projectTitle == project_.projectTitle) {

		// {title: "college", taskList: [{A}, {B}, {C}]}
	    for (let [taskObj_index, taskObj_] of project_.taskList.entries()) {
	//       console.log(project_index, taskObj_index, taskObj_.theTask, taskObj_.dueDate);
	      lists.appendChild(createOneTask(project_index, taskObj_index, taskObj_.theTask, taskObj_.dueDate));
	    }
	  }
	}
	 
}
function focusActive() {
	projectHeading.textContent = selectedProject.projectTitle;
	
}
function createOneTask(projectIndex__, taskIndex__, taskReceived, dateReceived) {
  let taskRow = document.createElement("label");
//   taskRow.setAttribute("for", `task${taskIndex__ + 1}`);

  let leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  taskRow.appendChild(leftSide);


  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
//   checkBox.setAttribute("id", `task${taskIndex__ + 1}`);
  checkBox.classList.add("checkbox");
  leftSide.appendChild(checkBox);

  let theTask_ = document.createElement("span");
  theTask_.classList.add("theTask");
  theTask_.textContent = taskReceived;
  leftSide.appendChild(theTask_);

  let rightSide = document.createElement("div");
  rightSide.classList.add("right-side");  
  taskRow.appendChild(rightSide);

  let date = document.createElement("span");
  date.classList.add("date");
  date.textContent = dateReceived;
  rightSide.appendChild(date);

  let remove = document.createElement("span");
  remove.classList.add("remove");
  remove.textContent = "✕";
  rightSide.appendChild(remove);

  return taskRow;

}
