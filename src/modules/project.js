export default class Project {
	constructor(title, taskList= []){
		this.projectTitle = title;
		this.taskList = taskList;
	}

	createOneProject() {
		const projectRow = document.createElement("li");
		projectRow.innerHTML = `<span class="heading">${this.projectTitle}</span><figure class="heading-icon"><img src="./remove-project.svg" alt="" class="heading-icon_img remove_project">` 
		projectRow.classList.add("custom-project");
		// projectRow.textContent = this.projectTitle;
		return projectRow;
	}

	

}