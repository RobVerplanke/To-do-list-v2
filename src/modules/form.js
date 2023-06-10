// create a pop up form to display: view full task info, edit task, add task

const formTop = document.querySelector('#form-top');
const formContent = document.querySelector('#form-content');

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


function formViewTask() {
  enableForm();
}


function formEditTask() {
  enableForm();
}


function formAddTask() {
  enableForm();
}

export { enableForm, formViewTask, formEditTask, formAddTask }