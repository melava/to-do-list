const container = document.getElementById('content-container');
const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const taskContainer = document.getElementById('task-container')
const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');

const getName = () => document.getElementById('name').value;
const getDueDate = () => document.getElementById('dueDate').value;
const getDescription = () => document.getElementById('description').value;
const getPriority = () => document.getElementById('priority').value;
const getProjectName = () => document.getElementsByClassName('selected')[0].textContent;
const getProjectNode = () => document.getElementsByClassName('selected')[0];
const getType = () => {
    let type
    if (document.getElementById('quick').checked) {
        type = document.getElementById('quick').value
    } else if (document.getElementById('regular').checked) {
        type = document.getElementById('regular').value
    }

    return type
}

const closeOverlay = () => {
    const overlay = document.getElementById('form-overlay');
    container.removeChild(overlay);
}

const clearInput = (input) => {
    input.value = '';
    input.focus()
}

export { container, quickListProjects, postitProjects, taskContainer, addProject, addToDo }
export { getName, getDueDate, getDescription, getPriority, getProjectName, getProjectNode, getType }
export { clearInput, closeOverlay }
