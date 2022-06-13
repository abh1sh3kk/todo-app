export let TaskData = {
  data: [
    {
      projectTitle: "Web Development",
      taskList: [
        {
          theTask: "Solve Coding Problems",
          dueDate: "2015-03-12",
          taskCompleted: false,
        },
        {
          theTask: "Finish Projects",
          dueDate: "2015-03-12",
          taskCompleted: false,
        },
        {
          theTask: "Refactor",
          dueDate: "2015-03-12",
          taskCompleted: true,
        },
      ],
    },
    {
      projectTitle: "College",
      taskList: [
        {
          theTask: "Complete assesments",
          dueDate: "2015-03-12",
          taskCompleted: true,
        },
        {
          theTask: "Message your crush",
          dueDate: "2015-03-12",
          taskCompleted: true,
        },
        {
          theTask: "Sleep",
          dueDate: "2015-03-12",
          taskCompleted: true,
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
  addNewProject: function (newProject) {
    this.data.push(newProject);
    // console.log(this.data);
  },
};