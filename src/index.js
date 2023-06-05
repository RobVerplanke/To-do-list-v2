import Task from './modules/todo';
import { printTasks } from './modules/ui';

const newTask = new Task('Test to-do task', 'just for testing', 'note', false, 'date');
printTasks();
console.log(newTask);
