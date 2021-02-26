import { Project } from './projects/factory'
import { printProject } from './projects/print'
import { projectForm } from './projects/form'
import { Task } from './tasks/factory'
import { quickTaskForm } from './tasks/form'


const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');
let projectArray = [];

//get info + launch factory creation
const getInfoNewProject = () => {
    const getName = document.getElementById('name').value;
    let getType = '';
    if (document.getElementById('quick').checked) {
        getType = document.getElementById('quick').value
    } else if (document.getElementById('regular').checked) {
        getType = document.getElementById('regular').value
    }
    const getId = projectArray.length;
    const project = Project(getType, getName, getId);
    addProjectToList(project);
}

//add project to the list and print it
const addProjectToList = (project) => {
    projectArray.push(project);
    printProject(project);

    return { projectArray }
}

const chooseTaskForm = () => {
    const projectSelected = document.getElementsByClassName('project selected')[0]
    if (projectSelected.className.includes('quick')) {
        quickTaskForm();
    } else if (projectSelected.className.includes('regular')) {
        console.log('regular');
        //regularTaskForm();
    } else {
        console.log('ho no, there isn\'t any project selected!')
    }
}
 


// ----------------------------------CALLS
addProject.addEventListener('click', projectForm);
addToDo.addEventListener('click', chooseTaskForm);


// add 2 prototype project to start the page
const protoQuick = Project('quick', 'prototype-shopping-list', 0);
const protoReg = Project('regular', 'prototype-classic-project', 1);
addProjectToList(protoReg);
addProjectToList(protoQuick);

export { getInfoNewProject, quickListProjects, postitProjects }