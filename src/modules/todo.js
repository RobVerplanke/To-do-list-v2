import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';
import { clearMainContent, printTasks } from './ui';

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

// Return all tasks as objects
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

function filterTasks(condition){
  const today = new Date();
  const taskList = convertAllTasks();
  const tasksFiltered = taskList.filter(condition);
  return tasksFiltered;
}

function getAllObjectTasks(){
  clearMainContent();
  printTasks(convertAllTasks());
}

function getTodaysTasks() {
  clearMainContent();
  printTasks(filterTasks((task) => isToday(parseISO(task.date))));
}

function getThisWeeksTasks() {
  clearMainContent();
  printTasks(filterTasks((task) => isThisWeek(parseISO(task.date))));
}

function getImportantTasks() {
  clearMainContent();
  printTasks(filterTasks((task) => task.prioStatus === true));
}

export {
  convertAllTasks, getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks,
};
