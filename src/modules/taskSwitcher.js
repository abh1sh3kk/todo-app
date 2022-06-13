import { TaskData } from "./taskData.js";
import Task from "./task.js";

const taskSwitcher = (() => {
  //   activateSwitchingListeners();

  const listContainer = document.querySelector(".task-lists");
  const addButtonTask = document.querySelector(".add-new-tasks__button");
  const allProjects = document.querySelectorAll("li");

  // ------------------------------HELPER FUNCTIONS------------------------------
  const deSelectAll = () => {
    allProjects.forEach((eachProject) => {
      eachProject.classList.remove("active");
      eachProject.classList.remove("d-active");
    });
  };
  const selectAllProject = () => {
    document.querySelector("#all_tasks").classList.add("d-active");
  };
  const selectTodayProject = () => {
    document.querySelector("#today").classList.add("d-active");
  };
  const selectThisWeekProject = () => {
    document.querySelector("#this-week").classList.add("d-active");
  };

  // ************************************************************************

  const changeHeading = () => {
    console.log(TaskData.selectedProject);
  };

  const hideAddTaskButton = () => {
    addButtonTask.style.display = "none";
  };
  const clearScreen = () => {
    listContainer.innerHTML = "";
  };
  const highlightSelectedProject = () => {
    if (TaskData.selectedProject == "All Project") {
      deSelectAll();
      selectAllProject();
    } else if (TaskData.selectedProject == "Today") {
      deSelectAll();
      selectTodayProject();
    }
    else if (TaskData.selectedProject == "This Week") {
	deSelectAll();
	selectThisWeekProject();
    }
  };

  const loadAllTasks = () => {
    /*
		clear screen first

		select taskList container
		append all tasks one by one with loop

		hide add task button

		change selected project
	*/
    TaskData.setSelectedProject("All Project");

    clearScreen();

    changeHeading();

    for (let project_ of TaskData.data) {
      for (let [taskIndex, task_] of project_.taskList.entries()) {
        let newTask = new Task(
          project_.taskList[taskIndex].theTask,
          project_.taskList[taskIndex].taskCompleted,
          project_.taskList[taskIndex].theDate
        );
        listContainer.appendChild(newTask.createOneTask());
      }
    }

    hideAddTaskButton();

    highlightSelectedProject();
  };
  const loadTodayTasks = () => {
    TaskData.setSelectedProject("Today");
    highlightSelectedProject();
    console.log("Today's tasks are loaded");
  };
  const loadThisWeekTasks = () => {
    TaskData.setSelectedProject("This Week");
    highlightSelectedProject();
    console.log("This week's tasks are loaded");
  };
  const loadCustomTasks = (e) => {
    console.log(`${e.target.textContent}'s task is loaded.`);
  };
  // ------------------------------HELPER FUNCTIONS------------------------------

  const handleSwitchingClick = (e) => {
    if (e.target.getAttribute("id") == "all-tasks") loadAllTasks();
    else if (e.target.getAttribute("id") == "today") loadTodayTasks();
    else if (e.target.getAttribute("id") == "this-week") loadThisWeekTasks();
    else if (e.target.classList.contains("custom-project")) loadCustomTasks(e);
    else;
  };
  const activateSwitchingListeners = (() => {
    document.body.addEventListener("click", (e) => {
      handleSwitchingClick(e);
    });
  })();
})();
