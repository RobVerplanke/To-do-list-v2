import { formViewTask, formEditTask } from './form';
import { 
  getNumberOfAllTasks, getNumberOfTodaysTasks, getNumberOfThisWeeksTasks, getNumberOfImportantTasks, getNumberOfProjectsTasks, getNumberOfHouseholdTasks,
  getNumberOfSportsTasks, getNumberOfHobbiesTasks 
} from './counter';

// A customized function for creating elements to avoid repetition
function createListElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// A customized function for creating elements in the pop-up window to avoid repetition
function createFormElement(type, className) {
  const listItem = document.createElement(type);
  listItem.classList.add(className);
  return listItem;
}

// Show the number of tasks on each corresponding button
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

// Get all counter holders and set its content after the page is loaded
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
    addButton
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
    
    taskCheckbox.type = 'checkbox';

    // set content of title and description
    taskTitle.innerHTML = task.title;
    taskDescription.innerHTML = task.description;

    //  Add edit- and delete button icons imported from Google Fonts
    taskEditButton.innerHTML = '<span class="material-symbols-outlined" title="Edit task">edit_note</span>';
    taskDeleteButton.innerHTML = '<span class="material-symbols-outlined" title="Delete task">delete</span>';
    
    // Open form when clicked
    taskTitle.addEventListener('click', formViewTask);
    taskEditButton.addEventListener('click', formEditTask);

    
    // Add all new elements to the list element
    taskCheckboxHolder.append(taskCheckbox);
    taskTextHolder.append(taskTitle, taskDescription);
    taskItem.append(taskCheckboxHolder, taskTextHolder, taskEditButton, taskDeleteButton);
    
    // Add list element to main area and add a horizontal line to visually divide the tasks
    const hr = document.createElement('hr');
    mainContent.append(taskItem, hr);
  });
}


// ***** Pop-up window *****


// Get the content holder in the pop-up window
function getFormContentElement(){
  const formContent = document.querySelector('#form-content');
  return { formContent }
}


function getFormElements() {
  const contentCat = document.querySelector('#content-task-cat');
  const contentTitle = document.querySelector('#content-task-title');
  const contentDescription = document.querySelector('#content-task-desc');
  const contentNote = document.querySelector('#content-task-note');
  const contentPrioStatus = document.querySelector('#content-task-prio');
  const contentDate = document.querySelector('#content-task-date');
  const contentCompleted = document.querySelector('#content-task-completed');

  return { contentCat, contentTitle, contentDescription, contentNote, contentPrioStatus, contentDate, contentCompleted }
}

function createViewTaskElements() {
  const viewCat = createFormElement('p', '#view-task-cat');
  const viewTitle = createFormElement('p', '#view-task-title');
  const viewDescription = createFormElement('p', '#view-task-desc');
  const viewNote = createFormElement('p', '#view-task-note');
  const viewPrioStatus = createFormElement('p', '#view-task-prio');
  const viewDate = createFormElement('p', '#view-task-date');
  const viewCompleted = createFormElement('p', '#view-task-completed');

  return { viewCat, viewTitle, viewDescription, viewNote, viewPrioStatus, viewDate, viewCompleted }
}

function createInputTaskElements() {
  const inputCat = createFormElement('input', '#input-task-cat');
  const inputTitle = createFormElement('input', '#input-task-title');
  const inputDescription = createFormElement('input', '#input-task-desc');
  const inputNote = createFormElement('input', '#input-task-note');
  const inputPrioStatus = createFormElement('input', '#input-task-prio');
  const inputDate = createFormElement('input', '#input-task-date');
  const inputCompleted = createFormElement('input', '#input-task-completed');

  return { inputCat, inputTitle, inputDescription, inputNote, inputPrioStatus, inputDate, inputCompleted }
}

export { createListElement, printTasks, clearMainContent, setTitle, setTaskCounter, setAllTaskCounters, getAllElements, getFormContentElement,
  getFormElements, createViewTaskElements, createInputTaskElements };