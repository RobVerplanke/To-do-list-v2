import { getAllElements } from './ui';
import { 
  getAllObjectTasks, getTodaysTasks, getThisWeeksTasks, getImportantTasks, 
  getProjectsTasks, getHouseholdTasks, getSportsTasks, getHobbiesTasks 
} from './todo';


function addEventListeners() {
  // Get al navigation buttons
  const { 
    optionAll,
    optionToday,
    optionWeek,
    optionPrio,
    catProjects,
    catHousehold,
    catSports,
    catHobbies
  } = getAllElements();
  
  // Add event listeners to each button
  optionAll.addEventListener("click", getAllObjectTasks);
  optionToday.addEventListener("click", getTodaysTasks);
  optionWeek.addEventListener("click", getThisWeeksTasks);
  optionPrio.addEventListener("click", getImportantTasks);

  catProjects.addEventListener("click", getProjectsTasks);
  catHousehold.addEventListener("click", getHouseholdTasks);
  catSports.addEventListener("click", getSportsTasks);
  catHobbies.addEventListener("click", getHobbiesTasks);
}

export { addEventListeners };
