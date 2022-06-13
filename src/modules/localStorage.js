import { TaskData } from "./taskData.js";
const refreshLocalStorage = () => {
  localStorage.setItem("taskData", JSON.stringify(TaskData.data));
};
const refreshTaskData = () => {
  TaskData.data= JSON.parse(localStorage.getItem("taskData"));
};
const clearLocalStorage = () => {
	localStorage.clear();
}
export { refreshTaskData, refreshLocalStorage, clearLocalStorage }