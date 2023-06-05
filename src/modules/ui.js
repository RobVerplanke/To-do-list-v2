// A function for creating elements to prevent repetition
function createListElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// Display tasks in the main area
export default function printTasks() {
  const mainContent = document.querySelector('#main-content');
  const hr = document.createElement('hr');

  // Create all elements
  const task = createListElement('ul', 'task');
  const taskCheckboxHolder = createListElement('li', 'task-checkbox');
  const taskCheckbox = createListElement('input', 'task-select');
  const taskTextHolder = createListElement('li', 'task-text');
  const taskTitle = createListElement('div', 'task-title');
  const taskDescription = createListElement('div', 'task-description');
  const taskEditButton = createListElement('li', 'task-edit');
  const taskDeleteButton = createListElement('li', 'task-delete');

  // Add edit- and delete button icons, set input type as checkbox
  taskEditButton.innerHTML = '<span class="material-symbols-outlined" title="Edit task">edit_note</span>';
  taskDeleteButton.innerHTML = '<span class="material-symbols-outlined" title="Delete task">delete</span>';
  taskCheckbox.type = 'checkbox';

  // Add all new elements to the list element
  taskCheckboxHolder.append(taskCheckbox);
  taskTextHolder.append(taskTitle, taskDescription);
  task.append(taskCheckboxHolder, taskTextHolder, taskEditButton, taskDeleteButton);

  // Add list element to main area and add a line to visually divide the tasks
  mainContent.append(task, hr);
}
