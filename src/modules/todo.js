import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';
import { clearMainContent, printTasks, setTitle } from './ui';

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

// Return all tasks as objects so we can work with them
function convertAllTasks() {
  const tasks = getAllArrayTasks();
  const taskObjects = [];
  
  // Create an object for each task in the storage array
  tasks.forEach((task) => {
    const taskObject = new Task(...task);
    taskObjects.push(taskObject);
  });

  return taskObjects;
}

// Customized function to filter the selected tasks
function filterTasks(condition){
  const today = new Date();
  const taskList = convertAllTasks();
  const tasksFiltered = taskList.filter(condition);
  return tasksFiltered;
}


// Get tasks

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