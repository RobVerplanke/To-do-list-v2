import { isToday, isThisWeek } from 'date-fns';
import { getAllTasks } from './storage';

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
  const tasks = getAllTasks();
  const taskObjects = [];

  // Create an object for each task in the storage array
  tasks.forEach((task) => {
    const taskObject = new Task(...task);
    taskObjects.push(taskObject);
  });

  return taskObjects;
}

function filterTasks(condition){
  const taskList = convertAllTasks();
  const tasksFiltered = taskList.filter(condition);
  return tasksFiltered;
}

function getTodaysTasks() {
  return filterTasks((task) => isToday(task.date));
}

function getThisWeeksTasks() {
  return filterTasks((task) => isThisWeek(task.date));
}

function getImportantTasks() {
  return filterTasks((task) => task.prioStatus === true);
}

export {
  convertAllTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks,
};
