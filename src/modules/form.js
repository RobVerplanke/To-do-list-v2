// create a pop up form to display: view full task info, edit task, add task

import { createFormElement } from './ui';


// Get the holders in the pop-up window
function getFormElements(){
  const formTop = document.querySelector('#form-top');
  const formContent = document.querySelector('#form-content');
  return { formTop, formContent }
}

// Function to easily switch between visible/invisible
function switchClass(oldClass, newClass){
  const formContainer = document.querySelector('#form-container');
  formContainer.classList.remove(oldClass);
  formContainer.classList.add(newClass);
}

// Make pop-up visible
function enableForm() {
  switchClass('form-container-disabled', 'form-container-enabled');

  // Let the cancel button make the form invisible
  const cancelButton = document.querySelector('#cancel-button');
  cancelButton.addEventListener('click', disableForm);
}

// Make pop-up invisible
function disableForm() {
  switchClass('form-container-enabled', 'form-container-disabled');
}

function getFormTaskElements() {
  const labelTaskCat = document.querySelector('#label-task-cat');
  const labelTaskTitle = document.querySelector('#label-task-title');
  const labelTaskDescription = document.querySelector('#label-task-desc');
  const labelTaskNote = document.querySelector('#label-task-note');
  const labelTaskPrioStatus = document.querySelector('#label-task-prio');
  const labelTaskDate = document.querySelector('#label-task-date');
  const labelTaskCompleted = document.querySelector('#label-task-completed');

  const contentTaskCat = document.querySelector('#content-task-cat');
  const contentTaskTitle = document.querySelector('#content-task-title');
  const contentDescription = document.querySelector('#content-task-desc');
  const contentNote = document.querySelector('#content-task-note');
  const contentPrioStatus = document.querySelector('#content-task-prio');
  const contentTaskDate = document.querySelector('#content-task-date');
  const contentCompleted = document.querySelector('#content-task-completed');

  return { labelTaskCat, labelTaskTitle, labelTaskDescription, labelTaskNote, labelTaskPrioStatus, labelTaskDate, labelTaskCompleted,
    contentTaskCat, contentTaskTitle, contentDescription, contentNote, contentPrioStatus, contentTaskDate, contentCompleted }
}

function createViewTaskElements() {
  const viewTaskCat = createFormElement('p', '#view-task-cat');
  const viewTaskTitle = createFormElement('p', '#view-task-title');
  const viewTaskDescription = createFormElement('p', '#view-task-desc');
  const viewTaskNote = createFormElement('p', '#view-task-note');
  const viewTaskPrioStatus = createFormElement('p', '#view-task-prio');
  const viewTaskCompleted = createFormElement('p', '#view-task-completed');

  return { viewTaskCat, viewTaskTitle, viewTaskDescription, viewTaskNote, viewTaskPrioStatus, viewTaskCompleted }
}

function createInputTaskElements() {
  const inputTaskCat = createFormElement('input', '#input-task-cat');
  const inputTaskTitle = createFormElement('input', '#input-task-title');
  const inputTaskDescription = createFormElement('input', '#input-task-desc');
  const inputTaskNote = createFormElement('input', '#input-task-note');
  const inputTaskPrioStatus = createFormElement('input', '#input-task-prio');
  const inputTaskCompleted = createFormElement('input', '#input-task-completed');

  return { inputTaskCat, inputTaskTitle, inputTaskDescription, inputTaskNote, inputTaskPrioStatus, inputTaskCompleted }
}


function formViewTask() {
  enableForm();
  getFormElements();
  getFormTaskElements();
  createViewTaskElements();

  // Fill content holders with task properties

  console.log('View task info');
}

function formEditTask() {
  enableForm();
  getFormElements();
  getFormTaskElements();
  createInputTaskElements();

  // Fill content holders with pre-filled input fields

  console.log('Edit task info');
}

function formAddTask() {
  enableForm();
  getFormElements();
  getFormTaskElements();
  createInputTaskElements();

  // Fill content holders with empty input fields

  console.log('Add task');
}

export { formViewTask, formEditTask, formAddTask }