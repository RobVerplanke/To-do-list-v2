import { formViewTask, formEditTask } from './form/form';
import { setCompletedStatus } from './todo';
import { removeTask } from './storage';
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

// A customized function for creating input elements in the pop-up window to avoid repetition
function createInputElement(element, className, type) {
  const listItem = document.createElement(element);
  listItem.classList.add(className);
  listItem.type = type;
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

function setPrioClass(taskTitle, status){
  taskTitle.classList.add(status);
}

function setCompletedClass(taskTitle){
  taskTitle.style.setProperty("text-decoration", "line-through");
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
    
    // If task is completed, check the checkbox
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;

    // Change the 'completed' status of a task
    taskCheckbox.addEventListener('change', () => {
      setCompletedStatus(task, taskCheckbox.checked);
    });

    // Set content
    taskTitle.innerHTML = task.title;

    if (task.prioStatus === 'low') setPrioClass(taskTitle, 'low');
    if (task.prioStatus === 'normal') setPrioClass(taskTitle, 'normal');
    if (task.prioStatus === 'high') setPrioClass(taskTitle, 'high');
    if (task.completed === true) setCompletedClass(taskTitle);

    taskDescription.innerHTML = task.description;

    //  Add edit- and delete button icons imported from Google Fonts
    taskEditButton.innerHTML = '<span class="material-symbols-outlined" title="Edit task">edit_note</span>';
    taskDeleteButton.innerHTML = '<span class="material-symbols-outlined" title="Delete task">delete</span>';
    
    // Open form when clicked
    taskTitle.addEventListener('click', () => formViewTask(task));
    taskEditButton.addEventListener('click', () => formEditTask(task));
    taskDeleteButton.addEventListener('click', () => removeTask(task.id));

    
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

function getFormElements() {
  const contentCat = document.querySelector('#content-task-cat');
  const contentTitle = document.querySelector('#content-task-title');
  const contentDescription = document.querySelector('#content-task-desc');
  const contentNote = document.querySelector('#content-task-note');
  const contentPrioStatus = document.querySelector('#content-task-prio');
  const contentDate = document.querySelector('#content-task-date');
  const contentCompleted = document.querySelector('#content-task-completed');
  const submitButtonContainer = document.querySelector('#form-bottom');

  return { contentCat, contentTitle, contentDescription, contentNote, contentPrioStatus, contentDate, contentCompleted, submitButtonContainer }
}

function createViewTaskElements() {
  const viewCat = createFormElement('p', '#view-task-cat');
  const viewTitle = createFormElement('p', '#view-task-title');
  const viewDescription = createFormElement('p', '#view-task-desc');
  const viewNote = createFormElement('p', '#view-task-note');
  const viewPrioStatus = createFormElement('p', '#view-task-prio');
  const viewDate = createFormElement('p', '#view-task-date');
  const viewCompleted = createFormElement('input', '#view-task-completed');
  viewCompleted.type = 'checkbox';
  viewCompleted.disabled = true;

  return { viewCat, viewTitle, viewDescription, viewNote, viewPrioStatus, viewDate, viewCompleted }
}

function createInputTaskElements() {
  const inputCat = createInputElement('input', '#input-task-cat', 'text');
  const inputTitle = createInputElement('input', '#input-task-title', 'text');
  const inputDescription = createInputElement('input', '#input-task-desc', 'text');
  const inputNote = createInputElement('input', '#input-task-note', 'text');
  const inputPrioStatus = document.createElement('select');
  const inputDate = createInputElement('input', '#input-task-date', 'text');
  const inputCompleted = createFormElement('input', '#view-task-completed');
  
  inputPrioStatus.classList.add('input-task-prio');
  const optionsPrioStatusLow = document.createElement('option');
  optionsPrioStatusLow.value = 'low';
  optionsPrioStatusLow.text = 'Low';

  const optionsPrioStatusNormal = document.createElement('option');
  optionsPrioStatusNormal.value = 'normal';
  optionsPrioStatusNormal.text = 'Normal';

  const optionsPrioStatusHigh = document.createElement('option');
  optionsPrioStatusHigh.value = 'high';
  optionsPrioStatusHigh.text = 'High';

  inputPrioStatus.appendChild(optionsPrioStatusLow);
  inputPrioStatus.appendChild(optionsPrioStatusNormal);
  inputPrioStatus.appendChild(optionsPrioStatusHigh);

  return { inputCat, inputTitle, inputDescription, inputNote, inputPrioStatus, inputDate, inputCompleted }
}


export { createListElement, printTasks, clearMainContent, setTitle, setTaskCounter, setAllTaskCounters, getAllElements,
  getFormElements, createViewTaskElements, createInputTaskElements };