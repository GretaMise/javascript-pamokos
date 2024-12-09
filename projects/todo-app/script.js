const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;
  //   alert(taskText);
  //   alert(`Task added!`);
  if (taskText === '') {
    alert(`Nieko neivedei! Ivesk uzduoti!!`);
    return;
  }
  //   alert(taskText);
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    taskList.removeChild(taskItem);
  };

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskInput.focus();
}

addTaskButton.addEventListener('click', addTask);
