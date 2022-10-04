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
    // dom event listner
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTask);
    // filtter tasks event
    filter.addEventListener('keyup', filterTasks);
}
// get tasks frpm ls
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
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

    });
}
// Add Task{}
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

    // store in ls
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    task.push(task);

    localStorage.setItem('tasks', JSON.strigify(tasks));

}
// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contans('delere-item')) {
        if (confirm('Are you sure?')) {
            e.targetparentElement.paratElement.remove();

            // remove from ls
            removeTaskFromLocalStorage
                (e.target.parentElement.parentElement);
        }
    }

}

//remove from ls
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    tasks.forEach(function(task) {
        if (taskItem.textContent === task) {
            task.splice(index, 1);
        }
    });
    localStorage.setItem('task', JSON.stringify(tasks));
}
// clear task
function clearTask() {
    // taskList.innerHTML='';

    // faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear from ls
    clearTaskFronLocalStorage();
}
// clear task from ls
function clearTaskFromLocalStorage() {
    localStorage.clear();
}
// filter  Task 
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}