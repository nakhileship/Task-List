//Define UI Var
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//  Load all event listeners
loadEventListners();

// function all event listeners
function loadEventListners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTask);
}

// Add Task
function addTask(e) {
    if (taskInput.value == '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = doacument.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHtml = '<i class="fa-remove></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contans('delere-item')) {
        if (confirm('Are you sure?')) {
            e.targetparentElement.paratElement.remove();
        }
    }

}
// clear task
function clearTask() {
    // taskList.innerHTML='';

    // faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}