import { getProjectsTasks } from './modules/todo';
import { addEventListeners } from './modules/nav';
import { setAllTaskCounters } from './modules/ui.js'

// Initially display all tasks
getProjectsTasks();

// Make navigation buttons clickable
addEventListeners();

// Display the number of tasks per category
setAllTaskCounters();