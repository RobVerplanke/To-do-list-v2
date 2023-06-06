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
function getAllObjects() {
  const tasks = getAllTasks();
  const taskObjects = [];

  // Create an object for each task in the storage array
  tasks.forEach((task) => {
    const taskObject = new Task(...task);
    taskObjects.push(taskObject);
  });

  return taskObjects;
}

export default getAllObjects;
