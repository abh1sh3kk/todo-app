import { TaskData } from "./taskData.js";
import allData from "./data.json";
const refreshLocalStorage = () => {
  localStorage.setItem("taskData", JSON.stringify(TaskData.data));
};
const initializeLocalStorage = () => {
  if (localStorage.getItem("taskData") != null) return;

  localStorage.setItem("taskData", JSON.stringify(allData));

  // Load localStorage with my allData if it's empty
};


const refreshTaskData = () => {
  TaskData.setData(JSON.parse(localStorage.getItem("taskData")));
};


const clearLocalStorage = () => {
  localStorage.clear();
};
export {
  refreshTaskData,
  refreshLocalStorage,
  clearLocalStorage,
  initializeLocalStorage,
};
