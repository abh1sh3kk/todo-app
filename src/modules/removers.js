import { refreshLocalStorage } from "./localStorage";
import { TaskData } from "./taskData";

const removeTask = (e) => {
    removeTaskFromTaskData(e);
    refreshLocalStorage();
    removeTaskElement(e);
};

const removeProjectFromUI = (e) => {
    e.target.parentElement.parentElement.remove();

    console.log(TaskData);

    // if (TaskData.isEmpty()) {
    //   console.log("TaskData is empty")
    //   displayEmptyMessage();
    //   // loadAllTasks();
    //   console.log("UI.js 87 .. load all tasks now")
    // }
};

const removeProject = (e) => {
    removeProjectFromTaskData(e);

    refreshLocalStorage();

    removeProjectFromUI(e);

    // console.log(`Remove Project fn is called ${TaskData.data.slice(TaskData.getSelectedProjectIndex(), 1)}`)
};

const removeTaskFromTaskData = (e) => {
    let textToRemove = e.target.parentElement.previousElementSibling.lastElementChild.textContent;
    let tasksOfSelectedProject = TaskData.data[TaskData.getSelectedProjectIndex()].taskList?.map(
        (task_) => task_.theTask
    );
    let indexOfTTR = tasksOfSelectedProject.indexOf(textToRemove);

    console.log(TaskData.data[TaskData.getSelectedProjectIndex()].taskList.splice(indexOfTTR, 1));
};

const removeProjectFromTaskData = (e) => {
    // const projectIndex = TaskData.getSelectedProjectIndex();

    // // slice if enough data in TaskData
    // if (TaskData.length >  projectIndex) TaskData.setData(TaskData.data.slice(projectIndex, 1));
    // else console.log("Slice couldn't be done.. UI:119");

    // // if TaskData is empty
    // if (TaskData.length > 0) TaskData.setSelectedProject(TaskData.data[0].projectTitle);
    // else displayEmptyMessage();

    const projectToRemove = e.target.parentElement.previousElementSibling.textContent;
    const indexToRemove = TaskData.findProjectIndex(projectToRemove);
    TaskData.setData(TaskData.data.slice(indexToRemove, 1));
};

const removeTaskElement = (e) => {
    e.target.parentElement.parentElement.remove();
};

const removeProjectElement = (e) => {
    // customProjectList.childNodes[TaskData.getSelectedProjectIndex()].remove();
    console.log(customProjectList);
};

export {
    removeProject,
    removeProjectElement,
    removeProjectFromTaskData,
    removeTask,
    removeTaskElement,
    removeTaskFromTaskData,
    removeProjectFromUI,
};
