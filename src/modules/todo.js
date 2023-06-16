import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';
import { clearMainContent, printTasks, setTitle } from './ui';

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

// Get tasks

let selectedCategory = 'Projects';

function getSelectedCategory(){
  return selectedCategory;
}

function getAllObjectTasks(){
  clearMainContent();
  setTitle('All tasks');
  printTasks(getAllArrayTasks());
  selectedCategory = 'All tasks';
}

function getTodaysTasks() {
  clearMainContent();
  setTitle('Todays tasks');
  printTasks(filterTasks((task) => isToday(parseISO(task.date))));
  selectedCategory = 'Todays tasks';
}

function getThisWeeksTasks() {
  clearMainContent();
  setTitle('This weeks tasks');
  printTasks(filterTasks((task) => isThisWeek(parseISO(task.date))));
  selectedCategory = 'This weeks tasks';
}

function getImportantTasks() {
  clearMainContent();
  setTitle('Important tasks');
  printTasks(filterTasks((task) => task.prioStatus === true));
  selectedCategory = 'Important tasks';
}

 function getProjectsTasks(){
  clearMainContent();
  setTitle('Projects');
  printTasks(filterTasks((task) => task.category === 'Projects'));
  selectedCategory = 'Projects';
 }

 function getHouseholdTasks(){
  clearMainContent();
  setTitle('Household');
  printTasks(filterTasks((task) => task.category === 'Household'));
  selectedCategory = 'Household';
 }
 
 function getSportsTasks(){
  clearMainContent();
  setTitle('Sports');
  printTasks(filterTasks((task) => task.category === 'Sports'));
  selectedCategory = 'Sports';
 }
 
 function getHobbiesTasks(){
  clearMainContent();
  setTitle('Hobbies');
  printTasks(filterTasks((task) => task.category === 'Hobbies'));
  selectedCategory = 'Hobbies';
 }

export { 
  getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, 
  getProjectsTasks, getHouseholdTasks, getSportsTasks, getHobbiesTasks, createNewObject, getSelectedCategory
};