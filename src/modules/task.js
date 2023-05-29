export default class Task {
  
    constructor(theTask, isCompleted = "false", theDate = "No Date") {
        this.theTask = theTask;
        this.isCompleted = isCompleted;
        this.theDate = theDate;
    }

    createOneTask() {
        let taskRow = document.createElement("label");

        taskRow.innerHTML = `<div class="left-side">
              <input type="checkbox" class="checkbox checkbox1" />
              <span class="theTask">${this.theTask}</span>
            </div>
            <div class="right-side">
              <span class="date">${this.theDate}</span>
              <span class="remove">✕</span>
            </div>`;
        return taskRow;
    }
}
// let leftSide = document.createElement("div");
// leftSide.classList.add("left-side");
// taskRow.appendChild(leftSide);

// let checkBox = document.querySelector("checkbox1");
// checkBox.setAttribute("type", "checkbox");
// checkBox.checked = this.isCompleted;
// checkBox.classList.add("checkbox");
// leftSide.appendChild(checkBox);

// let theTask_ = document.createElement("span");
// theTask_.classList.add("theTask");
// theTask_.textContent = this.theTask;
// leftSide.appendChild(theTask_);

// let rightSide = document.createElement("div");
// rightSide.classList.add("right-side");
// taskRow.appendChild(rightSide);

// let date = document.createElement("input");
// date.classList.add("date");
// date.setAttribute("type", "date");
// // date.textContent = dateReceived;
// rightSide.appendChild(date);

// let remove = document.createElement("span");
// remove.classList.add("remove");
// remove.textContent = "✕";
// rightSide.appendChild(remove);
