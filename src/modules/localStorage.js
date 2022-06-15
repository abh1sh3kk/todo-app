import { TaskData } from "./taskData.js";
const refreshLocalStorage = () => {
  localStorage.setItem("taskData", JSON.stringify(TaskData.data));
};
const refreshTaskData = () => {
  let TaskData__localStorage = localStorage.getItem("taskData");
  if (TaskData__localStorage != null)  TaskData.data = JSON.parse(TaskData__localStorage);
};
const clearLocalStorage = () => {
	localStorage.clear();
}
export { refreshTaskData, refreshLocalStorage, clearLocalStorage }