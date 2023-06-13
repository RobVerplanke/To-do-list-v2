
// Stores all tasks in the format: category, title, description, note, prio status, date, completed

const tasks = [
  ['Household', 'Oud papier weg gooien', 'Naar recycling container brengen', 'Vergeet niet het oud papier uit de rommelkamer mee te nemen', 'low', '2023-06-14', true],
  ['Hobbies', 'Gitaar spelen', 'Leer de mineur toonladder', 'over de hele nek van de gitaar', 'normal', '2023-10-01', true],
  ['Projects', 'Javascript leren', 'Leer Javascript, CSS, programmeren in modules', 'En nieuwe technieken', 'high', '2024-01-01', false],
  ['Sports', 'Hardlopen', 'Ren 5 kilometer', '', 'normal', '2023-06-06', false],
  ['Household', 'Boodschappen doen', 'Koop melk, brood en eieren', '', 'high', '2023-06-08', false],
  ['Hobbies', 'Schilderen', 'Maak een landschapsschilderij', 'Met olieverf', 'low', '2023-09-20', true],
  ['Projects', 'Website ontwerpen', 'Ontwerp de lay-out voor een nieuwe website', 'Maak het responsief', 'normal', '2023-12-05', false],
  ['Sports', 'Yoga', 'Doe een 30-minuten durende yogasessie', '', 'normal', '2023-06-09', true],
  ['Household', 'Schoonmaken', 'Maak de badkamer en keuken schoon', '', 'low', '2023-06-08', false],
  ['Hobbies', 'Koken', 'Probeer een nieuw recept uit', 'Mexicaanse tacos', 'high', '2023-09-10', false]
];
   
function getAllArrayTasks() {
return tasks;
}

function editTask() {
// edit task
}

function addTask() {
// add task
}

function deleteTask() {
// delete task
}

export {
getAllArrayTasks, editTask, addTask, deleteTask,
};