import { Project } from './projectFactory.js'

const container = document.getElementById('content-container');
const projectsContainer = document.getElementById('projects-container');
const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const todosContainer = document.getElementById('todos-container');

const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');
let projectArray = [];

//get info + launch factory creation + launch printing
const getNewProject = () => {
    const getName = document.getElementById('name').value;
    let getType = '';
    if (document.getElementById('quick').checked) {
        getType = document.getElementById('quick').value
    } else if (document.getElementById('regular').checked) {
        getType = document.getElementById('regular').value
    }
    const getId = projectArray.length;
    // const project = Project(getType, getName, getId);
    // projectArray.push(project);
    // printProject(project);
    closeOverlay();

    return {projectArray}
}



// DOM print
const projectForm = () => {
    const overlay = document.createElement('div');
    overlay.id = 'form-overlay';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form')
    overlay.appendChild(formContainer);
    
    const radioContainer = document.createElement('div');
    radioContainer.id = 'radio-container';
    const labelQuick = document.createElement('label');
    labelQuick.setAttribute('for','quick');
    labelQuick.textContent = 'Quick List';
    const inputQuick = document.createElement('input');
    inputQuick.type = 'radio';
    inputQuick.name = 'type';
    inputQuick.value = 'quick';
    inputQuick.id = 'quick';
    const labelRegular = document.createElement('label');
    labelRegular.setAttribute('for','regular');
    labelRegular.textContent = 'Regular List';
    const inputRegular = document.createElement('input');
    inputRegular.type = 'radio';
    inputRegular.name = 'type';
    inputRegular.value = 'regular';
    inputRegular.id = 'regular';
    radioContainer.appendChild(inputQuick);
    radioContainer.appendChild(labelQuick);
    radioContainer.appendChild(inputRegular);
    radioContainer.appendChild(labelRegular);
    formContainer.appendChild(radioContainer);

    const textContainer = document.createElement('div');
    textContainer.id = 'text-container';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'name';
    const labelName = document.createElement('label');
    labelName.setAttribute('for','name');
    labelName.textContent = 'Project\'s name';
    textContainer.appendChild(labelName);
    textContainer.appendChild(inputName);
    formContainer.appendChild(textContainer);

    const submitContainer = document.createElement('div');
    submitContainer.id = 'submit-container';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Create project';
    submitButton.id = 'create-project'
    submitContainer.appendChild(submitButton);
    formContainer.appendChild(submitContainer);

    container.appendChild(overlay);

    submitButton.addEventListener('click', getNewProject)
}

const closeOverlay = () => {
    const overlay = document.getElementById('form-overlay');
    container.removeChild(overlay);
}

const printProject = (project) => {
    const card = document.createElement('div');
    card.classList.add('project');
    card.classList.add(project.type);
    card.textContent = `${project.name}`;
    project.type === 'quick' ? quickListProjects.appendChild(card) : postitProjects.appendChild(card);
};


// // const task = () => {
// //     const name = _getName();
// //     const dueDate = _getDueDate();
// //     const description = getDescription();
// //     const priority = getPriority();
// //     const label = getLabel();
// //     const status = getStatus();
// // }
 


// // CALLS
addProject.addEventListener('click', projectForm);

const testproject = Project('shop', 'test1', '0');
console.log(testproject);