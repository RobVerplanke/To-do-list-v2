#To-Do App
This project is a to-do app developed as part of "The Odin Project" JavaScript curriculum. The app allows users to manage and organize tasks.

##Features
- Users can add new tasks with a title and an optional deadline.
- Users can mark tasks as completed.
- Users can edit tasks to update the title or deadline.
- Users can delete tasks.
- The app stores tasks in the browser's localStorage, preserving them even after page refresh.

##Installation
- Clone this repository to your local machine.
- Navigate to the project directory in your terminal.
- Run the npm install command to install all dependencies.
- Use the npm run build command to bundle the project with Webpack.
- Open the index.html file in your favorite web browser.

##Technologies
- JavaScript
- HTML
- CSS
- ES6 modules
- Webpack

##Code Structure
The codebase is organized following the SOLID principle to promote a modular and maintainable structure. Here's an overview of the main files and directories:

- src/index.js: The main entry point of the app. It imports the necessary modules and starts the app.
- src/todo.js: Contains the logic for managing tasks, including adding, editing, deleting, and marking as completed.
- src/ui.js: Responsible for updating the user interface based on the state of the tasks.
- src/storage.js: Provides functions to store and retrieve tasks from the browser's localStorage.

##Contributions
Contributions to this project are welcome. If you'd like to suggest improvements, report a bug, or add a new feature, please open a pull request with your changes.
