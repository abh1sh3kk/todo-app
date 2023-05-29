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

    selectedProject: "",
    selectedProjectIndex: 0,

    getSelectedProjectIndex: function () {
      console.log("hi")
        let projectIndex = TaskData.data.findIndex(
            (project_) => project_.projectTitle == this.selectedProject
        );
        return projectIndex;
    },

    addNewTask: function (newTask) {
        for (let project of this.data) {
            if (project.projectTitle == this.selectedProject) project.taskList.push(newTask);
        }
    },

    setSelectedProject: function (project) {
        this.selectedProject = project;
    },

    setSelectedProjectIndex: function (index) {
        this.selectedProject = this.TaskData.data[index];
    },

    getSelectedProject: function () {
        return this.selectedProject;
    },

    addNewProject: function (newProject) {
        this.data.push(newProject);
    },

    addNewTask: function (newTask) {
        let requiredTaskList = this.data[this.getSelectedProjectIndex()].taskList;
        if (Array.isArray(requiredTaskList))
            this.data[this.getSelectedProjectIndex()].taskList.push(newTask);
    },

    setData: function (newData) {
        this.data = newData;
    },

    isEmpty: function () {
        return this.data.length == 0;
    },

    findProjectIndex: function (project_) {
        let projectArray = this.data.map((eachProject) => eachProject.projectTitle);
        return projectArray.indexOf(project_);
    },

};
