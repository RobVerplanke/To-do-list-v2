// handle click events

import { getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks } from './todo';

// Get al navigation buttons
  const optionAll = document.querySelector('#options-all');
  const optionToday = document.querySelector('#options-today');
  const optionWeek = document.querySelector('#options-week');
  const optionPrio = document.querySelector('#options-prio');

  const catProjects = document.querySelector('#cat-projects');
  const catHousehold = document.querySelector('#cat-household');
  const catSports = document.querySelector('#cat-sports');
  const catHobbies = document.querySelector('#cat-hobbies');

  const addButton = document.querySelector('#nav-add-button');

// Add event listeners to each button
function addEventListeners() {
  optionAll.addEventListener("click", getAllObjectTasks);
  optionToday.addEventListener("click", getTodaysTasks);
  optionWeek.addEventListener("click", getThisWeeksTasks);
  optionPrio.addEventListener("click", getImportantTasks);
}

export { addEventListeners };
