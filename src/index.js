import { printTasks } from './modules/ui';
import { getAllObjectTasks } from './modules/todo';
import { addEventListeners } from './modules/nav';

// Initially load all tasks
// printTasks(getAllObjectTasks());
addEventListeners();