// create a pop up form to display: view full task info, edit task, add task

import { getFormElements, createViewTaskElements, createInputTaskElements, removeLabelCompleted, addLabelCompleted, removeSubmitButton, addSubmitButton } from './ui';

// Function to easily switch between visible/invisible class
function switchClass(oldClass, newClass){
  const formContainer = document.querySelector('#form-container');
  formContainer.classList.remove(oldClass);
  formContainer.classList.add(newClass);
}

// Clear content
function clearFormContent() {
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

    // Clear all values
    contentCat.innerHTML = '';
    contentTitle.innerHTML = '';
    contentDescription.innerHTML = '';
    contentNote.innerHTML = '';
    contentPrioStatus.innerHTML = '';
    contentDate.innerHTML = '';
    contentCompleted.innerHTML = '';
}

// Make pop-up visible
function enableForm() {
  switchClass('form-container-disabled', 'form-container-enabled');
  clearFormContent();

  // Let the cancel button make the form invisible
  const cancelButton = document.querySelector('#cancel-button');
  cancelButton.addEventListener('click', disableForm);
  
  // Edit button in the pop-up window
  // const editButton = document.querySelector('#edit-button');
  // editButton.addEventListener('click', formEditTask);
}

// Make pop-up invisible
function disableForm() {
  switchClass('form-container-enabled', 'form-container-disabled');
  clearFormContent();
}

function removeEditButton(){
  const editButton = document.querySelector('#edit-button');
  editButton.innerHTML = '';
}

function AddEditButton(){
  const editButton = document.querySelector('#edit-button');
  if (editButton.innerHTML === '') {
    editButton.innerHTML = `<span class="material-symbols-outlined" id ="edit-button" title="Edit task">edit_note</span>`;
  }
}


// View the details of a task


function formViewTask(task) {
  enableForm();
  addLabelCompleted();
  AddEditButton();

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
  addSubmitButton();
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
}

export { formViewTask, formEditTask, formAddTask }