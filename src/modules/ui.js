import getAllObjects from './todo';

// A function for creating elements to prevent repetition
function createListElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// Display tasks in the main area
export default function printTasks() {
  // import all tasks as objects
  const tasks = getAllObjects();

  const mainContent = document.querySelector('#main-content');
  const hr = document.createElement('hr');

  tasks.forEach((task) => {
    // Create all elements
    const taskItem = createListElement('ul', 'task');
    const taskCheckboxHolder = createListElement('li', 'task-checkbox');
    const taskCheckbox = createListElement('input', 'task-select');
    const taskTextHolder = createListElement('li', 'task-text');
    const taskTitle = createListElement('div', 'task-title');
    const taskDescription = createListElement('div', 'task-description');
    const taskEditButton = createListElement('li', 'task-edit');
    const taskDeleteButton = createListElement('li', 'task-delete');

    // set content
    taskTitle.innerHTML = task.title;
    taskDescription.innerHTML = task.description;

    // set input type as checkbox and add edit- and delete button icons
    taskCheckbox.type = 'checkbox';
    taskEditButton.innerHTML = '<span class="material-symbols-outlined" title="Edit task">edit_note</span>';
    taskDeleteButton.innerHTML = '<span class="material-symbols-outlined" title="Delete task">delete</span>';

    // Add all new elements to the list element
    taskCheckboxHolder.append(taskCheckbox);
    taskTextHolder.append(taskTitle, taskDescription);
    taskItem.append(taskCheckboxHolder, taskTextHolder, taskEditButton, taskDeleteButton);

    // Add list element to main area and add a horizontal line to visually divide the tasks
    mainContent.append(taskItem, hr);
  });
}
