import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';
import { clearMainContent, printTasks, setTitle, setTaskCounter } from './ui';

// The task object
class Task {
  constructor(category, title, description, note, prioStatus, date, completed) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.note = note;
    this.prioStatus = prioStatus;
    this.date = date;
    this.completed = completed;
  }
}

// Return all the tasks in the storage array (./storage.js) as objects so we can work with them
function convertAllTasks() {
  const tasks = getAllArrayTasks();
  const taskObjects = [];
  
  // Create an object for each task
  tasks.forEach((task) => {
    const taskObject = new Task(...task);
    taskObjects.push(taskObject);
  });

  return taskObjects;
}

// Filter all the task objects for the given condition and return only the selected tasks
function filterTasks(condition){
  const today = new Date();
  const taskList = convertAllTasks();
  const tasksFiltered = taskList.filter(condition);
  return tasksFiltered;
}

// Get number of tasks for each category

function getNumberOfAllTasks() {
  const tasks = getAllArrayTasks();
  return tasks.length;
}

function getNumberOfTodaysTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => isToday(parseISO(task.date)));
  return filteredTasks.length;
}

function getNumberOfThisWeeksTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => isThisWeek(parseISO(task.date)));
  return filteredTasks.length;
}

function getNumberOfImportantTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => task.prioStatus === true);
  return filteredTasks.length;
}

function getNumberOfProjectsTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => task.category === 'Projects');
  return filteredTasks.length;
}

function getNumberOfHouseholdTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => task.category === 'Household');
  return filteredTasks.length;
}

function getNumberOfSportsTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => task.category === 'Sports');
  return filteredTasks.length;
}

function getNumberOfHobbiesTasks() {
  const tasks = convertAllTasks();
  const filteredTasks = tasks.filter((task) => task.category === 'Hobbies');
  return filteredTasks.length;
}


// Display the content of the selected tasks

function getAllObjectTasks(){
  clearMainContent();
  setTitle('All tasks');
  printTasks(convertAllTasks());
}

function getTodaysTasks() {
  clearMainContent();
  setTitle('Todays tasks');
  printTasks(filterTasks((task) => isToday(parseISO(task.date))));
}

function getThisWeeksTasks() {
  clearMainContent();
  setTitle('This weeks tasks');
  printTasks(filterTasks((task) => isThisWeek(parseISO(task.date))));
}

function getImportantTasks() {
  clearMainContent();
  setTitle('Important tasks');
  printTasks(filterTasks((task) => task.prioStatus === true));
}

 function getProjectsTasks(){
  clearMainContent();
  setTitle('Projects');
  printTasks(filterTasks((task) => task.category === 'Projects'));
 }

 function getHouseholdTasks(){
  clearMainContent();
  setTitle('Household');
  printTasks(filterTasks((task) => task.category === 'Household'));
 }
 
 function getSportsTasks(){
  clearMainContent();
  setTitle('Sports');
  printTasks(filterTasks((task) => task.category === 'Sports'));
 }
 
 function getHobbiesTasks(){
  clearMainContent();
  setTitle('Hobbies');
  printTasks(filterTasks((task) => task.category === 'Hobbies'));
 }


export { 
  getNumberOfAllTasks, getNumberOfTodaysTasks, getNumberOfThisWeeksTasks, getNumberOfImportantTasks, getNumberOfProjectsTasks, getNumberOfHouseholdTasks,
  getNumberOfSportsTasks, getNumberOfHobbiesTasks, convertAllTasks, getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, 
  getProjectsTasks, getHouseholdTasks, getSportsTasks, getHobbiesTasks
};
