    import { getFormElements } from '../ui';
    import { formEditTask } from './form';


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

function createSubmitButton() {
    const submitButtonContainer = document.querySelector('#form-bottom');
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-form-button';
    submitButton.textContent = 'Submit';
    submitButtonContainer.append(submitButton);
    
    return submitButton;
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

export { enableForm, disableForm, removeLabelCompleted, addLabelCompleted, removeSubmitButton, removeEditButton, AddEditButton, createSubmitButton }