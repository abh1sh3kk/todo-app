const addTaskInputArea = document.querySelector(".add-new-tasks__input--text");
const newProjectForm = document.querySelector(".add-new-projects__form");
const addNewProjectButton = document.querySelector(".add-new-projects__button");
const newTasksForm = document.querySelector(".add-new-tasks__form");
const addNewTaskButton = document.querySelector(".add-new-tasks__button");
const addProjectInputArea = document.querySelector(".add-new-projects__input--text");

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

export { showProjectForm, showTaskForm, hideProjectForm, hideTaskForm };
