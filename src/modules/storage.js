
// Stores all tasks in the format: unique id, category, title, description, note, prio status, date, completed

import { setAllTaskCounters } from './ui';
import { reloadTasks } from './form/form';

let tasks = [
  {
    id: 1,
    category: 'Household',
    title: 'Oud papier weg gooien',
    description: 'Naar recycling container brengen',
    note: 'Vergeet niet het oud papier uit de rommelkamer mee te nemen',
    prioStatus: 'low',
    date: '2023-06-14',
    completed: true
  },
  {
    id: 2,
    category: 'Hobbies',
    title: 'Gitaar spelen',
    description: 'Leer de mineur toonladder',
    note: 'over de hele nek van de gitaar',
    prioStatus: 'normal',
    date: '2023-07-01',
    completed: true
  },
  {
    id: 3,
    category: 'Projects',
    title: 'Javascript leren',
    description: 'Leer Javascript, CSS, programmeren in modules',
    note: 'En nieuwe technieken',
    prioStatus: 'high',
    date: '2024-01-22',
    completed: false
  },
  {
    id: 4,
    category: 'Sports',
    title: 'Hardlopen',
    description: 'Ren 5 kilometer',
    note: '',
    prioStatus: 'normal',
    date: '2023-06-23',
    completed: false
  },
  {
    id: 5,
    category: 'Household',
    title: 'Boodschappen doen',
    description: 'Koop melk, brood en eieren',
    note: '',
    prioStatus: 'high',
    date: '2023-06-21',
    completed: false
  },
  {
    id: 6,
    category: 'Hobbies',
    title: 'Schilderen',
    description: 'Maak een landschapsschilderij',
    note: 'Met olieverf',
    prioStatus: 'low',
    date: '2023-09-20',
    completed: true
  },
  {
    id: 7,
    category: 'Projects',
    title: 'Website ontwerpen',
    description: 'Ontwerp de lay-out voor een nieuwe website',
    note: 'Maak het responsief',
    prioStatus: 'normal',
    date: '2023-06-19',
    completed: false
  },
  {
    id: 8,
    category: 'Sports',
    title: 'Yoga',
    description: 'Doe een 30-minuten durende yogasessie',
    note: '',
    prioStatus: 'normal',
    date: '2023-06-18',
    completed: true
  },
  {
    id: 9,
    category: 'Household',
    title: 'Schoonmaken',
    description: 'Maak de badkamer en keuken schoon',
    note: '',
    prioStatus: 'low',
    date: '2023-06-18',
    completed: false
  },
  {
    id: 10,
    category: 'Hobbies',
    title: 'Koken',
    description: 'Probeer een nieuw recept uit',
    note: 'Mexicaanse tacos',
    prioStatus: 'high',
    date: '2023-06-25',
    completed: false
  }
];


function generateId(){
  return Date.now();
}

function addObjectToArray(task){
  tasks.push(task);
}
   
function getAllArrayTasks() {
return tasks;
}

function editTask(id, inputCat, inputTitle, inputDescription, inputNote, inputPrioStatus, inputDate, inputCompleted) {
  const selectedTask = tasks.filter(task => task.id === id)[0];
  selectedTask.category = inputCat;
  selectedTask.title = inputTitle;
  selectedTask.description = inputDescription;
  selectedTask.note = inputNote;
  selectedTask.prioStatus = inputPrioStatus;
  selectedTask.date = inputDate;
  selectedTask.completed = inputCompleted; 
}

function removeTask(id) {
  // Ask for confirmation
  const confirmed = confirm("Are you sure you want to delete this task?");

  // If confirmed, delete the task
  if (confirmed) {
    tasks = tasks.filter(task => task.id !== id);

    // Update de task counter and update the task list
    setAllTaskCounters();
    reloadTasks();
  }
}


export {
getAllArrayTasks, editTask, removeTask, addObjectToArray, generateId
};