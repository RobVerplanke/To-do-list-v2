import { isToday, isThisWeek, parseISO } from 'date-fns';
import { getAllArrayTasks } from './storage';


// Get number of tasks for each category

function getNumberOfAllTasks() {
    const tasks = getAllArrayTasks();
    return tasks.length;
  }
  
  function getNumberOfTodaysTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => isToday(parseISO(task.date)));
    return filteredTasks.length;
  }
  
  function getNumberOfThisWeeksTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => isThisWeek(parseISO(task.date)));
    return filteredTasks.length;
  }
  
  function getNumberOfImportantTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => task.prioStatus === true);
    return filteredTasks.length;
  }
  
  function getNumberOfProjectsTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => task.category === 'Projects');
    return filteredTasks.length;
  }
  
  function getNumberOfHouseholdTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => task.category === 'Household');
    return filteredTasks.length;
  }
  
  function getNumberOfSportsTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => task.category === 'Sports');
    return filteredTasks.length;
  }
  
  function getNumberOfHobbiesTasks() {
    const tasks = getAllArrayTasks();
    const filteredTasks = tasks.filter((task) => task.category === 'Hobbies');
    return filteredTasks.length;
  }
  
export {
  getNumberOfAllTasks, getNumberOfTodaysTasks, getNumberOfThisWeeksTasks, getNumberOfImportantTasks, getNumberOfProjectsTasks, getNumberOfHouseholdTasks,
  getNumberOfSportsTasks, getNumberOfHobbiesTasks
}