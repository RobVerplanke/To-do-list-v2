// create a pop up form to display: view full task info, edit task, add task

import { enableForm, disableForm, removeLabelCompleted, addLabelCompleted, removeSubmitButton, removeEditButton, AddEditButton, createSubmitButton } from './form-ui';
import { getFormElements, createViewTaskElements, createInputTaskElements, setAllTaskCounters } from '../ui';
import { addObjectToArray, editTask, generateId } from '../storage';
import { 
  createNewObject, getSelectedCategory, getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, 
  getProjectsTasks, getHouseholdTasks, getSportsTasks, getHobbiesTasks 
} from '../todo';

// Update the tasklist after a change is made
function reloadTasks(){
  if(getSelectedCategory() === 'All tasks') getAllObjectTasks();
  if(getSelectedCategory() === 'Todays tasks') getTodaysTasks();
  if(getSelectedCategory() === 'This weeks tasks') getThisWeeksTasks();
  if(getSelectedCategory() === 'Important tasks') getImportantTasks();
  if(getSelectedCategory() === 'Projects') getProjectsTasks();
  if(getSelectedCategory() === 'Household') getHouseholdTasks();
  if(getSelectedCategory() === 'Sports') getSportsTasks();
  if(getSelectedCategory() === 'Hobbies') getHobbiesTasks();
}

// View the details of a task
function formViewTask(task) {
  enableForm();
  addLabelCompleted();
  AddEditButton(task);
  removeSubmitButton();

  const {
    contentCat,
    contentTitle,
    contentDescription,
    contentNote,
    contentPrioStatus,
    contentDate,
    contentCompleted
  } = getFormElements();

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
  removeEditButton();

  const {
    contentCat,
    contentTitle,
    contentDescription,
    contentNote,
    contentPrioStatus,
    contentDate,
    contentCompleted
  } = getFormElements();

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

  contentCat.appendChild(inputCat);
  contentTitle.appendChild(inputTitle);
  contentDescription.appendChild(inputDescription);
  contentNote.appendChild(inputNote);
  contentPrioStatus.appendChild(inputPrioStatus);
  contentDate.appendChild(inputDate);
  contentCompleted.appendChild(inputCompleted);
  
  const submitButton = createSubmitButton();
  submitButton.addEventListener('click', (e) => {
    // e.preventDefault();
    editTask(task.id, inputCat.value, inputTitle.value, inputDescription.value, inputNote.value, inputPrioStatus.value, inputDate.value, inputCompleted.checked);
    disableForm();
    reloadTasks();
  })

}


// Add details of a new task

function formAddTask() {
  enableForm();
  removeEditButton();
  removeLabelCompleted();

  const {
    contentCat,
    contentTitle,
    contentDescription,
    contentNote,
    contentPrioStatus,
    contentDate
  } = getFormElements();

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


  const submitButton = createSubmitButton();
  submitButton.addEventListener('click', () => {
    const newTask = createNewObject(generateId(), inputCat.value, inputTitle.value, inputDescription.value, inputNote.value, inputPrioStatus.value, inputDate.value, false);
    addObjectToArray(newTask);
    disableForm();
    setAllTaskCounters();
    reloadTasks()
  })
}

export { formViewTask, formEditTask, formAddTask, reloadTasks }