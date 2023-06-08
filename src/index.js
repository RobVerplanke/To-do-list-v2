import { getAllObjectTasks } from './modules/todo';
import { addEventListeners } from './modules/nav';

// Initially display all tasks
getAllObjectTasks();

// Make navigation buttons clickable
addEventListeners();