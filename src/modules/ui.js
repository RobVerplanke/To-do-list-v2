import { 
  getNumberOfAllTasks, getNumberOfTodaysTasks, getNumberOfThisWeeksTasks, getNumberOfImportantTasks, getNumberOfProjectsTasks, getNumberOfHouseholdTasks,
  getNumberOfSportsTasks, getNumberOfHobbiesTasks 
} from './counter';

// A function for creating elements to avoid repetition
function createListElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// Show number of tasks on each button
function setTaskCounter(numberOfTasks, counterID){
  const taskCounter = document.querySelector(counterID);
  taskCounter.innerHTML = numberOfTasks;
}

// Clear content area
function clearMainContent(){
  const mainContent = document.querySelector('#main-content');
  mainContent.innerHTML = "";
}

// Reset title
function setTitle(title){
  const mainTitle = document.querySelector('#main-title');
    mainTitle.innerHTML = title;
}

// Load all counters after the page is loaded
function setAllTaskCounters() {
  const counterAll = document.querySelector('#task-count-all');
  const counterToday = document.querySelector('#task-count-today');
  const counterWeek = document.querySelector('#task-count-week');
  const counterPrio = document.querySelector('#task-count-prio');

  const counterProjects = document.querySelector('#task-count-projects');
  const counterHousehold = document.querySelector('#task-count-household');
  const counterSports = document.querySelector('#task-count-sports');
  const counterHobbies = document.querySelector('#task-count-hobbies');

  counterAll.addEventListener("load", setTaskCounter(getNumberOfAllTasks(), '#task-count-all'));
  counterToday.addEventListener("load", setTaskCounter(getNumberOfTodaysTasks(), '#task-count-today'));
  counterWeek.addEventListener("load", setTaskCounter(getNumberOfThisWeeksTasks(), '#task-count-week'));
  counterPrio.addEventListener("load", setTaskCounter(getNumberOfImportantTasks(), '#task-count-prio'));

  counterProjects.addEventListener("load", setTaskCounter(getNumberOfProjectsTasks(), '#task-count-projects'));
  counterHousehold.addEventListener("load", setTaskCounter(getNumberOfHouseholdTasks(), '#task-count-household'));
  counterSports.addEventListener("load", setTaskCounter(getNumberOfSportsTasks(), '#task-count-sports'));
  counterHobbies.addEventListener("load", setTaskCounter(getNumberOfHobbiesTasks(), '#task-count-hobbies'));
}

// Return all elements that are needed for the navigation buttons
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
  const tasks = selectedObjects;
  const mainContent = document.querySelector('#main-content');
  
  // Create all HTML-elements for each task
  tasks.forEach((task) => {
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

    //  Add edit- and delete button icons imported from Ionicons
    taskEditButton.innerHTML = '<span class="material-symbols-outlined" title="Edit task">edit_note</span>';
    taskDeleteButton.innerHTML = '<span class="material-symbols-outlined" title="Delete task">delete</span>';
    
    taskCheckbox.type = 'checkbox';

    // Add all new elements to the list element
    taskCheckboxHolder.append(taskCheckbox);
    taskTextHolder.append(taskTitle, taskDescription);
    taskItem.append(taskCheckboxHolder, taskTextHolder, taskEditButton, taskDeleteButton);

    // Add list element to main area and add a horizontal line to visually divide the tasks
    const hr = document.createElement('hr');
    mainContent.append(taskItem, hr);
  });
}

export { printTasks, clearMainContent, setTitle, setTaskCounter, setAllTaskCounters, getAllElements };