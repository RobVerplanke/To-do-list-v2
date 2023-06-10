import { getProjectsTasks } from './modules/todo';
import { addEventListeners } from './modules/nav';
import { setAllTaskCounters } from './modules/ui.js'

// Initially display all tasks from the 'Projects' category
getProjectsTasks();

// Make navigation buttons clickable
addEventListeners();

// Display the number of tasks in each category
setAllTaskCounters();