import Task from "./task.js";
import { TaskData } from "./taskData.js";

const taskSwitcher = (() => {

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
    document.querySelector("#all-tasks").classList.add("d-active");
  };
  const selectTodayProject = () => {
    document.querySelector("#today").classList.add("d-active");
  };
  const selectThisWeekProject = () => {
    document.querySelector("#this-week").classList.add("d-active");
  };

  // ************************************************************************

  const performRituals = () => {
    clearScreen();
    changeHeading();
    highlightSelectedProject();
    hideCrossButton();
    hideAddTaskButton();
  };
  const clearScreen = () => {
    listContainer.innerHTML = "";
  };
  const changeHeading = () => {
    document.querySelector(".project-heading").textContent =
      TaskData.getSelectedProject();
  };

  const highlightSelectedProject = () => {
    deSelectAll();

    switch (TaskData.selectedProject) {
      case "All Tasks":
        selectAllProject();
        break;
      case "Today":
        selectTodayProject();
        break;
      case "This Week":
        selectThisWeekProject();
        break;
    }
    const hideAddTaskButton = () => {
      addButtonTask.classList.add("hidden");
    };
    const showAddTaskButton = () => {
      addButtonTask.classList.remove("hidden");
    };
  };

  const hideCrossButton = () => {
    // let crossBtn = document.querySelectorAll(".remove");

    //   crossBtn.forEach(cross => {
    //     cross.classList.add("hidden");
    //   })
    
    // crossBtn.classList.add('hidden');
  }
  const showCrossButton = () => {

    console.log("show cross button")
    // let crossBtn = document.querySelectorAll(".remove");

    //   crossBtn.forEach(cross => {
    //     cross.classList.remove("hidden");
    //   })
    
    // crossBtn.classList.remove('hidden');
  }
  const hideAddTaskButton = () =>  {
      addButtonTask.style.display = "none";
  }

  const showAddTaskButton = () =>  {
      addButtonTask.style.display = null  ;
  }

  const loadAllTasks = () => {
    TaskData.setSelectedProject("All Tasks");
    performRituals();

    for (let project_ of TaskData.data) {
      for (let [taskIndex, task_] of project_.taskList.entries()) {
        let newTask = new Task(
          project_.taskList[taskIndex].theTask,
          project_.taskList[taskIndex].isCompleted,
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
    performRituals();
  };
  const loadThisWeekTasks = () => {
    TaskData.setSelectedProject("This Week");
    performRituals();
  };
  const loadCustomTasks = (e) => {
    TaskData.setSelectedProject(e.target.textContent);
    performRituals();
    showAddTaskButton();
    showCrossButton();

    for (let [projectIndex, project_] of TaskData.data.entries()) {
      if (project_.projectTitle == e.target.textContent) {
        renderTasksOf(projectIndex);
      }
    }
  };

  // ------------------------------HELPER FUNCTIONS------------------------------
  const renderTasksOf = (projectIndex) => {
    let requiredTaskList = TaskData.data[projectIndex].taskList;
    
    if (Array.isArray(requiredTaskList)){
      for (let task_ of requiredTaskList) {
      let newTask = new Task(task_.theTask, task_.isCompleted, task_.dueDate);
      listContainer.appendChild(newTask.createOneTask());
        }
    }
    
  };
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
