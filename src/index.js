import { Project } from './projects/factory'
import { projectForm } from './projects/form'
import { printProject} from './projects/print'
import { QuickTask, RegularTask } from './tasks/factory'
import { quickTaskForm, regularTaskForm } from './tasks/form'
import { printQuickTask, printRegularTask } from './tasks/print'


const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const taskContainer = document.getElementById('task-container')
const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');
let projectsArray = [];
let quickList = [];
let tasksArray = [];

//get project info
const getInfoNewProject = () => {
    const getName = document.getElementById('name').value;
    let getType = '';
    if (document.getElementById('quick').checked) {
        getType = document.getElementById('quick').value
    } else if (document.getElementById('regular').checked) {
        getType = document.getElementById('regular').value
    }
    const getId = projectsArray.length;
    const project = Project(getType, getName, getId);
    
    return project
}

//add project to the list
const addProjectToList = (project) => {
    projectsArray.push(project);
    
    return projectsArray
}

const chooseTaskForm = () => {
    const projectSelected = document.getElementsByClassName('project selected')[0]
    if (projectSelected.className.includes('quick')) {
        quickTaskForm();
    } else if (projectSelected.className.includes('regular')) {
        regularTaskForm();
    } else {
        console.log('ho no, there isn\'t any project selected!')
    }
}

const getInfoNewQuickList = () => {
    const getDueDate = document.getElementById('dueDate').value;
    const getList = quickList.map(item => item);
    const getId = tasksArray.length;
    const getProject = document.getElementsByClassName('selected')[0].textContent
    const quickTask = QuickTask(getDueDate, getList, getProject, getId)

    return quickTask
}

const addItemToList = (item) => {
    quickList.push(item)

    return quickList
}

const addQuickTaskToList = (task) => {
    quickList = [];
    tasksArray.push(task);

    return tasksArray
}

const getInfoNewRegularTask = () => {
    const getName = document.getElementById('name').value;
    const getDueDate = document.getElementById('dueDate').value;
    const getDescription = document.getElementById('description').value;
    const getPriority = document.getElementById('priority').value;
    const getProject = document.getElementsByClassName('selected')[0].textContent
    const getId = tasksArray.length;
    const regularTask = RegularTask(getName, getDueDate, getDescription, getProject, getPriority, getId)

    return regularTask
}

const addRegularTaskToList = (task) => {
    tasksArray.push(task);

    return tasksArray
}

// ----------------------------------CALLS
// add 2 prototype project to start the page
const initiatePage = (() => {
    const testQuickTask = QuickTask('2021-03-02', ['aaa', 'bbb'], 'prototype-shopping-list', 0);
    const testRegTask = RegularTask('task prototype', '2021-03-09', 'description: lorem ipsum dolor sic amat.', 'prototype-classic-project', 'normal', 0);
    addQuickTaskToList(testQuickTask);
    addRegularTaskToList(testRegTask);
    printQuickTask(testQuickTask);
    printRegularTask(testRegTask);
    
    const protoQuick = Project('quick', 'prototype-shopping-list', 0);
    const protoReg = Project('regular', 'prototype-classic-project', 1);
    addProjectToList(protoReg);
    addProjectToList(protoQuick);
    printProject(protoQuick);
    printProject(protoReg);
    
})();
addProject.addEventListener('click', projectForm);
addToDo.addEventListener('click', chooseTaskForm);

export { getInfoNewProject, addProjectToList, getInfoNewQuickList, addItemToList, addQuickTaskToList, getInfoNewRegularTask, addRegularTaskToList, quickListProjects, postitProjects, taskContainer }