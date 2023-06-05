// test log
export default function uiTest() {
  console.log('ui.js log');
}

function printTasks() {
  const mainContent = document.querySelector('#main-content');
  const task = document.querySelector('.task');
  task.innerHTML += `
    <br><ul class="task">
      <li class="task-checkbox">
          <form action="">
             <input type="checkbox" name="taskDelete" id="task-delete">
          </form>
       </li>
       <li class="task-text">
         <div class="task-title"><p>Schoonmaken</p></div>
         <div class="task-description"><p>Slaapkamer opruimen, vegen/stofzuigen</p></div>
       </li>
       <li class="task-edit"><span class="material-symbols-outlined" title="Edit task">edit_note</span></li>
       <li class="task-delete"><span class="material-symbols-outlined" title="Delete task">delete</span></li>
    </ul>
  `;

  mainContent.append(task);
}

export { printTasks };
