export default class Project {
	constructor(title, taskList= []){
		this.projectTitle = title;
		this.taskList = taskList;
	}

	createOneProject() {
		const projectRow = document.createElement("li");
		projectRow.classList.add("custom-project");
		projectRow.textContent = this.projectTitle;
		return projectRow;
	}

}