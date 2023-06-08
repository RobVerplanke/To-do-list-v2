// Stores all tasks in this format: category, title, description, note, prioStatus, date, completed
const tasks = [
    ['Household', 'Oud papier weg gooien', 'Naar recycling container brengen', 'Vergeet niet het oud papier uit de rommelkamer mee te nemen', true, '2023-06-14', true],
    ['Hobbies', 'Gitaar spelen', 'Leer de mineur toonladder', 'over de hele nek van de gitaar', false, '2023-10-01', false],
    ['Projects', 'Javascript leren', 'Leer Javascript, CSS, programmeren in modules', 'En nieuwe technieken', true, '2024-01-01', false],
    ['Sports', 'Hardlopen', 'Ren 5 kilometer', '', false, '2023-06-06', false],
    ['Household', 'Boodschappen doen', 'Koop melk, brood en eieren', '', false, '2023-06-08', false],
    ['Hobbies', 'Schilderen', 'Maak een landschapsschilderij', 'Met olieverf', false, '2023-09-20', false],
    ['Projects', 'Website ontwerpen', 'Ontwerp de lay-out voor een nieuwe website', 'Maak het responsief', false, '2023-12-05', false],
    ['Sports', 'Yoga', 'Doe een 30-minuten durende yogasessie', '', false, '2023-06-09', true],
    ['Household', 'Schoonmaken', 'Maak de badkamer en keuken schoon', '', true, '2023-06-08', false],
    ['Hobbies', 'Koken', 'Probeer een nieuw recept uit', 'Mexicaanse tacos', false, '2023-09-10', false]
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
