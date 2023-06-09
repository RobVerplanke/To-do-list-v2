import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';
import { clearMainContent, printTasks, setTitle } from './ui';
import { reloadTasks } from './form/form';

let selectedCategory = 'Projects';

// The task object
class Task {
  constructor(id, category, title, description, note, prioStatus, date, completed) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.note = note;
    this.prioStatus = prioStatus;
    this.date = date;
    this.completed = completed;
  }
}

function createNewObject(id, category, title, description, note, prioStatus, date, completed) {
  const taskObject = new Task(id, category, title, description, note, prioStatus, date, completed);
  return taskObject;
}

// Customized function to filter the selected tasks
function filterTasks(condition){
  const today = new Date();
  const taskList = getAllArrayTasks();
  const tasksFiltered = taskList.filter(condition);
  return tasksFiltered;
}

function getSelectedCategory(){
  return selectedCategory;
}

function setCompletedStatus(task, newStatus) {
  task.completed = newStatus;
  reloadTasks();
}


// Get tasks by category

function getAllObjectTasks(){
  selectedCategory = 'All tasks';
  clearMainContent();
  setTitle('All tasks');
  printTasks(getAllArrayTasks());
}

function getTodaysTasks() {
  selectedCategory = 'Todays tasks';
  clearMainContent();
  setTitle('Todays tasks');
  printTasks(filterTasks((task) => isToday(parseISO(task.date))));
}

function getThisWeeksTasks() {
  selectedCategory = 'This weeks tasks';
  clearMainContent();
  setTitle('This weeks tasks');
  printTasks(filterTasks((task) => isThisWeek(parseISO(task.date))));
}

function getImportantTasks() {
  selectedCategory = 'Important tasks';
  clearMainContent();
  setTitle('Important tasks');
  printTasks(filterTasks((task) => task.prioStatus === 'high'));
}

function getProjectsTasks(){
  selectedCategory = 'Projects';
  clearMainContent();
  setTitle('Projects');
  printTasks(filterTasks((task) => task.category === 'Projects'));
 }

 function getHouseholdTasks(){
  selectedCategory = 'Household';
  clearMainContent();
  setTitle('Household');
  printTasks(filterTasks((task) => task.category === 'Household'));
 }
 
 function getSportsTasks(){
  selectedCategory = 'Sports';
  clearMainContent();
  setTitle('Sports');
  printTasks(filterTasks((task) => task.category === 'Sports'));
 }
 
 function getHobbiesTasks(){
  selectedCategory = 'Hobbies';
  clearMainContent();
  setTitle('Hobbies');
  printTasks(filterTasks((task) => task.category === 'Hobbies'));
 }

export { 
  getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, getProjectsTasks, getHouseholdTasks, 
  getSportsTasks, getHobbiesTasks, createNewObject, getSelectedCategory, setCompletedStatus
};