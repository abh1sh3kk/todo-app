import Project from "./project";
import Task from "./task";
import { TaskData } from "./taskData";
const customProjectList = document.querySelector(".custom-project-list-ul");

const clearProjects = () => {
    customProjectList.innerHTML = "";
};

const clearScreen = () => {
    document.querySelector(".task-lists").innerHTML = "";
};

const selectedProjectInit = () => {
    // TaskData.selectedProject = TaskData.data[0].projectTitle;
    TaskData.setSelectedProject(TaskData.data[0].projectTitle);
};
const renderTaskList = () => {
    // selectedProjectInit();
    if (TaskData.isEmpty()) return;

    if (TaskData.selectedProject.length < 1) return;

    let requiredProject = TaskData.data.find(
        (value) => value.projectTitle === TaskData.selectedProject
    );

    requiredProject.taskList.forEach(renderEachTask);

    // if taskData is empty, we do nothing
    // if the selected project have no tasks, we do nothing
    // Now, as the task data is not empty and selected projects don't have 0 tasks
    // we first filter out required project object in taskData,
    // After finding out the object I select the taskList and render each one with renderEachTask
    // RenderEachTask takes task object and render that task object
};
const renderProjectList = () => {
    clearProjects();

    if (TaskData.isEmpty()) return;

    let projectArray = TaskData.data.map((project) => project.projectTitle);
    projectArray.forEach(renderEachProject);

    // clear existing projects and start the process
    // now, if taskdata is already empty, do nothing
    // else, find project array, and render each one..
};
const renderEachTask = (task_) => {
    let newTask = new Task(task_.theTask, task_.isCompleted, task_.dueDate);
    listContainer.appendChild(newTask.createOneTask());
};
const renderEachProject = (item) => {
    let newProject = new Project(item);
    customProjectList.appendChild(newProject.createOneProject());

    // create a new project object
    // select the list and append the project (by creating appendible node)
};

export {
    renderEachProject,
    renderEachTask,
    renderProjectList,
    renderTaskList,
    selectedProjectInit,
    clearProjects,
    clearScreen,
};
