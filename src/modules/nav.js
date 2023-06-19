import { getAllElements } from './ui';
import { formAddTask } from './form/form';
import { 
  getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, 
  getProjectsTasks, getHouseholdTasks, getSportsTasks, getHobbiesTasks 
} from './todo';

// Add 'click' event listeners to each navigation button
function addEventListeners() {
  // Get all navigation buttons
  const { 
    optionAll,
    optionToday,
    optionWeek,
    optionPrio,
    catProjects,
    catHousehold,
    catSports,
    catHobbies,
    addButton
  } = getAllElements();
  
  // Add event listeners to each button and set the corresponding function
  optionAll.addEventListener("click", getAllObjectTasks);
  optionToday.addEventListener("click", getTodaysTasks);
  optionWeek.addEventListener("click", getThisWeeksTasks);
  optionPrio.addEventListener("click", getImportantTasks);

  catProjects.addEventListener("click", getProjectsTasks);
  catHousehold.addEventListener("click", getHouseholdTasks);
  catSports.addEventListener("click", getSportsTasks);
  catHobbies.addEventListener("click", getHobbiesTasks);

  addButton.addEventListener("click", formAddTask);

}

export { addEventListeners };