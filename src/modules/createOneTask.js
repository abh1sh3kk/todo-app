export function createOneTask(projectIndex__, taskIndex__, taskReceived, dateReceived) {
  let taskRow = document.createElement("label");
//   taskRow.setAttribute("for", `task${taskIndex__ + 1}`);

  let leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  taskRow.appendChild(leftSide);


  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
//   checkBox.setAttribute("id", `task${taskIndex__ + 1}`);
  checkBox.classList.add("checkbox");
  leftSide.appendChild(checkBox);

  let theTask_ = document.createElement("span");
  theTask_.classList.add("theTask");
  theTask_.textContent = taskReceived;
  leftSide.appendChild(theTask_);

  let rightSide = document.createElement("div");
  rightSide.classList.add("right-side");  
  taskRow.appendChild(rightSide);

  let date = document.createElement("span");
  date.classList.add("date");
  date.textContent = dateReceived;
  rightSide.appendChild(date);

  let remove = document.createElement("span");
  remove.classList.add("remove");
  remove.textContent = "✕";
  rightSide.appendChild(remove);

  return taskRow;

}
