import { hideProjectForm, hideTaskForm } from "./formVisibility";
import { refreshLocalStorage } from "./localStorage";
import Project from "./project";
import Task from "./task";
import { TaskData } from "./taskData";

const submitTask = (e) => {
    e.preventDefault();
    let inputValue = addTaskInputArea.value;
    console.log(TaskData.getSelectedProjectIndex());
    let existingTasks = TaskData.data[TaskData.getSelectedProjectIndex()].taskList.map(
        (task_) => task_.theTask
    );

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

export { submitProject, submitTask };
