function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput?.value;

  if (task) {
    const listItem = document.createElement("li");
    listItem.innerText = task;

    listItem.addEventListener("click", function () {
      taskList?.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}
