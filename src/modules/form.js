// create a pop up form to display: view full task info, edit task, add task

import { getFormElements, createViewTaskElements, createInputTaskElements, setAllTaskCounters } from './ui';
import { createNewObject } from './todo';
import { addObjectToArray } from './storage';

// Function to easily switch between visible/invisible class
function switchClass(oldClass, newClass){
  const formContainer = document.querySelector('#form-container');
  formContainer.classList.remove(oldClass);
  formContainer.classList.add(newClass);
}

// Clear content (and submit button)
function clearFormContent() {
    // Get all content holders
    const {
      contentCat,
      contentTitle,
      contentDescription,
      contentNote,
      contentPrioStatus,
      contentDate,
      contentCompleted,
      submitButtonContainer
    } = getFormElements();

    // Clear all values
    contentCat.innerHTML = '';
    contentTitle.innerHTML = '';
    contentDescription.innerHTML = '';
    contentNote.innerHTML = '';
    contentPrioStatus.innerHTML = '';
    contentDate.innerHTML = '';
    contentCompleted.innerHTML = '';
    submitButtonContainer.innerHTML = '';
}

// Make pop-up window visible
function enableForm() {
  switchClass('form-container-disabled', 'form-container-enabled');
  clearFormContent();

  // The cancel button makes the form invisible
  const cancelButton = document.querySelector('#cancel-button');
  cancelButton.addEventListener('click', disableForm);
}

// Make pop-up window  invisible
function disableForm() {
  switchClass('form-container-enabled', 'form-container-disabled');
  clearFormContent();
}

// Remove the 'Completed' label when its not needed (in the add form)
function removeLabelCompleted() {
  const labelCompleted = document.querySelector('#label-task-completed');
  labelCompleted.innerHTML = '';
}

// Add the 'Completed' label when its needed (in the view and edit form)
function addLabelCompleted() {
  const labelCompleted = document.querySelector('#label-task-completed');
  labelCompleted.innerHTML = 'Completed';
}

// Add the submit button when its needed (in the edit and add form)
function addSubmitButton() {
  const submitButtonContainer = document.querySelector('#form-bottom');
  const submitButton = document.createElement('button');
  submitButton.id = 'submit-form-button';
  submitButton.textContent = 'Submit';
  submitButtonContainer.append(submitButton);
  submitButton.addEventListener('click', () => {
    console.log('clicked');
  })
}

// Remove submit button when its not needed (in the view form)
function removeSubmitButton() {
  const submitFormButton = document.querySelector('#form-bottom');
  submitFormButton.innerHTML = '';
}

// Remove edit button when its not needed (in the edit and add form)
function removeEditButton(){
  const editButton = document.querySelector('#edit-button');
  editButton.innerHTML = '';
}

// Add the edit button when its needed (in the view form)
function AddEditButton(task){
  const editButton = document.querySelector('#edit-button');
  editButton.addEventListener('click', () => {
    clearFormContent();      
    formEditTask(task);
  });
  
  if (editButton.innerHTML === '') {
    editButton.innerHTML = `edit_note`;
  }
}


// View the details of a task


function formViewTask(task) {
  enableForm();
  addLabelCompleted();
  AddEditButton(task);
  removeSubmitButton();

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
  viewCat.textContent = task.category;
  viewTitle.textContent = task.title;
  viewDescription.textContent = task.description;
  viewNote.textContent = task.note;
  viewPrioStatus.textContent = task.prioStatus;
  viewDate.textContent = task.date;
  viewCompleted.checked = task.completed;

  // Add the <p> elements to the content holders
  contentCat.appendChild(viewCat);
  contentTitle.appendChild(viewTitle);
  contentDescription.appendChild(viewDescription);
  contentNote.appendChild(viewNote);
  contentPrioStatus.appendChild(viewPrioStatus);
  contentDate.appendChild(viewDate);
  contentCompleted.appendChild(viewCompleted);
}


// Edit the details of a task


function formEditTask(task) {
  enableForm();
  addLabelCompleted();
  addSubmitButton();
  removeEditButton();

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

  // Create input elements
  const { 
    inputCat,
    inputTitle,
    inputDescription,
    inputNote,
    inputPrioStatus,
    inputDate,
    inputCompleted
  } = createInputTaskElements();

  inputCompleted.type = 'checkbox';

  // Set the content of each input element
  inputCat.value = task.category;
  inputTitle.value = task.title;
  inputDescription.value = task.description;
  inputNote.value = task.note;
  inputPrioStatus.value = task.prioStatus;
  inputDate.value = task.date;
  inputCompleted.checked = task.completed;

  // Add the elements to the content holders
  contentCat.appendChild(inputCat);
  contentTitle.appendChild(inputTitle);
  contentDescription.appendChild(inputDescription);
  contentNote.appendChild(inputNote);
  contentPrioStatus.appendChild(inputPrioStatus);
  contentDate.appendChild(inputDate);
  contentCompleted.appendChild(inputCompleted);
}


// Add details of a new task


function formAddTask() {
  enableForm();
  removeEditButton();

  // Get all content holders
  const {
    contentCat,
    contentTitle,
    contentDescription,
    contentNote,
    contentPrioStatus,
    contentDate
  } = getFormElements();

  // Create <p> elements
  const { 
    inputCat,
    inputTitle,
    inputDescription,
    inputNote,
    inputPrioStatus,
    inputDate
  } = createInputTaskElements();

  // Add the <p> elements to the content holders
  contentCat.appendChild(inputCat);
  contentTitle.appendChild(inputTitle);
  contentDescription.appendChild(inputDescription);
  contentNote.appendChild(inputNote);
  contentPrioStatus.appendChild(inputPrioStatus);
  contentDate.appendChild(inputDate);

  removeLabelCompleted();

  const submitButtonContainer = document.querySelector('#form-bottom');
  const submitButton = document.createElement('button');
  submitButton.id = 'submit-form-button';
  submitButton.textContent = 'Submit';
  submitButtonContainer.append(submitButton);
  submitButton.addEventListener('click', () => {
    const newTask = createNewObject(inputCat.value, inputTitle.value, inputDescription.value, inputNote.value, inputPrioStatus.value, inputDate.value, false);
    addObjectToArray(newTask);
    disableForm();
    setAllTaskCounters();
  })
}

export { formViewTask, formEditTask, formAddTask }