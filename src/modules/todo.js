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

// Create an object for every task in the storage array
function convertToObject() {
  const tasks = getAllTasks();
  const taskObjects = [];

  tasks.forEach((task) => {
    const taskObject = new Task(task[0], task[1], task[2], task[3], task[4], task[5], task[6]);
    taskObjects.push(taskObject);
  });

  return taskObjects;
}

function getAllObjects() {
  return convertToObject();
}

export default getAllObjects;
