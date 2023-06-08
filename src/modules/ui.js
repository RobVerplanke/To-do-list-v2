// A function for creating elements to prevent repetition
function createListElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// Show number of tasks on each button
function setTaskCounter(numberOfTasks){
  const taskCounter = document.querySelector('#task-count');
  taskCounter.innerHTML = numberOfTasks;
}

// Reset content area
function clearMainContent(){
  const mainContent = document.querySelector('#main-content');
  mainContent.innerHTML = "";
}

// Reset title
function setTitle(title){
  const mainTitle = document.querySelector('#main-title');
    mainTitle.innerHTML = title;
}

function getAllElements(){
  const optionAll = document.querySelector('#options-all');
  const optionToday = document.querySelector('#options-today');
  const optionWeek = document.querySelector('#options-week');
  const optionPrio = document.querySelector('#options-prio');

  const catProjects = document.querySelector('#cat-projects');
  const catHousehold = document.querySelector('#cat-household');
  const catSports = document.querySelector('#cat-sports');
  const catHobbies = document.querySelector('#cat-hobbies');

  const addButton = document.querySelector('#nav-add-button');

  return {
    optionAll,
    optionToday,
    optionWeek,
    optionPrio,
    catProjects,
    catHousehold,
    catSports,
    catHobbies,
    addButton,
  };
}

// Display tasks in the main area
function printTasks(selectedObjects) {
  // import all tasks as objects
  const tasks = selectedObjects;

  const mainContent = document.querySelector('#main-content');
  
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
    const hr = document.createElement('hr');
    mainContent.append(taskItem, hr);
  });
}

export { printTasks, clearMainContent, setTitle, setTaskCounter, getAllElements };
