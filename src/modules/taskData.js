export let TaskData = {
  data: [
    {
      projectTitle: "Web Development",
      taskList: [
        {
          theTask: "Solve Coding Problems",
          dueDate: "2015-03-12",
          isCompleted: false,
        },
        {
          theTask: "Finish Projects",
          dueDate: "2015-03-12",
          isCompleted: false,
        },
        {
          theTask: "Refactor",
          dueDate: "2015-03-12",
          isCompleted: true,
        },
      ],
    },
    {
      projectTitle: "Assignments",
      taskList: [
        {
          theTask: "Complete DBMS labsheet",
          dueDate: "2015-03-12",
          isCompleted: false,
        },
        {
          theTask: "Finish AI assesments",
          dueDate: "2015-03-12",
          isCompleted: false,
        },
        {
          theTask: "Submit AI assesments",
          dueDate: "2015-03-12",
          isCompleted: true,
        },
      ],
    },
    {
      projectTitle: "College",
      taskList: [
        {
          theTask: "Complete assesments",
          dueDate: "2015-03-12",
          isCompleted: true,
        },
        {
          theTask: "Message your crush",
          dueDate: "2015-03-12",
          isCompleted: true,
        },
        {
          theTask: "Sleep",
          dueDate: "2015-03-12",
          isCompleted: true,
        },
      ],
    },
  ],
  selectedProject: "College",
  addNewTask: function (newTask) {
    for (let project of this.data) {
      if (project.projectTitle == this.selectedProject) {
        project.taskList.push(newTask);
      }
    }
  },
  setSelectedProject: function (project) {
    this.selectedProject = project;
  },
  getSelectedProject: function () {
    return this.selectedProject;
  },
  addNewProject: function (newProject) {
    this.data.push(newProject);
    // console.log(this.data);
  },
  addNewTask: function (newTask) {
    let projectIndex = this.data.findIndex(
      (project_) => project_.projectTitle == this.selectedProject
    );

    this.data[projectIndex].taskList.push(newTask);
  },
};
