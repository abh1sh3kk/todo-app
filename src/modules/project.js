class Project {
	constructor(title){
		this.title = title;
	}

	createOneProject() {
		const projectRow = document.createElement("li");
		projectRow.classList.add("custom-project");
		projectRow.textContent = this.title;
		return projectRow;
	}

	
}