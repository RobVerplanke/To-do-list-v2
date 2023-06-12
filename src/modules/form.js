// create a pop up form to display: view full task info, edit task, add task

import { getFormContentElement, getFormElements, createViewTaskElements, createInputTaskElements } from './ui';

// Function to easily switch between visible/invisible class
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

function formViewTask() {
  enableForm();
  const formContent = getFormContentElement();
  
  // Get all content holders
  const {
    contentCat,
    contentTitle,
    contentDescription,
    contentNote,
    contentPrioStatus,
    contentDate,
    contentCompleted
  } = getFormElements();

  // Create <p> elements
  const { 
    viewCat,
    viewTitle,
    viewDescription,
    viewNote,
    viewPrioStatus,
    viewDate,
    viewCompleted
  } = createViewTaskElements();

  // Set the content of each <p> element
  viewCat.innerHTML = '';
  viewTitle.innerHTML = '';
  viewDescription.innerHTML = '';
  viewNote.innerHTML = '';
  viewPrioStatus.innerHTML = '';
  viewDate.innerHTML = '';
  viewCompleted.innerHTML = '';

  // Add the <p> element to the content holder
  contentCat.append(viewCat);
  contentTitle.append(viewTitle);
  contentDescription.append(viewDescription);
  contentNote.append(viewNote);
  contentPrioStatus.append(viewPrioStatus);
  contentDate.append(viewDate);
  contentCompleted.append(viewCompleted);

  // Add all content holders to the parent content holder
  formContent.append(contentCat, contentTitle, contentDescription, contentNote, contentPrioStatus, contentDate, contentCompleted);

  console.log('View task info');
}

function formEditTask() {
  enableForm();
  getFormElements();
  createInputTaskElements();

  // Fill content holders with pre-filled input fields

  console.log('Edit task info');
}

function formAddTask() {
  enableForm();
  getFormElements();
  createInputTaskElements();

  // Fill content holders with empty input fields

  console.log('Add task');
}

export { formViewTask, formEditTask, formAddTask }