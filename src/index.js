import { addProject, addToDo, getName, getDueDate, getDescription, getProjectName, getProjectNode, getPriority, getType } from './DOMGlobalManipulations'
import { Project } from './projects/factory'
import { projectForm } from './projects/form'
import { printProject} from './projects/print'
import { QuickTask, RegularTask } from './tasks/factory'
import { quickTaskForm, regularTaskForm } from './tasks/form'
import { printQuickTask, printRegularTask } from './tasks/print'

let projectsArray = [];
let quickList = [];
let tasksArray = [];

const getInfoNewProject = () => {
    const name = getName();
    const type = getType();
    const projectId = projectsArray.length;
    const project = Project(type, name, projectId);
    
    return project
}

const addProjectToList = (project) => {
    projectsArray.push(project);
    
    return projectsArray
}

const chooseTaskForm = () => {
    const projectSelected = getProjectNode();

    if (projectSelected.className.includes('quick')) {
        quickTaskForm();
    } else if (projectSelected.className.includes('regular')) {
        regularTaskForm();
    } else {
        console.log('ho no, there isn\'t any project selected!')
    }
}

const getInfoNewQuickList = () => {
    const dueDate = getDueDate();
    const getList = quickList.map(item => item);
    const taskId = tasksArray.length;
    const currentProject = getProjectName();
    const quickTask = QuickTask(dueDate, getList, currentProject, taskId)

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
    const name = getName();
    const dueDate = getDueDate();
    const desc = getDescription();
    const priority = getPriority();
    const currentProject = getProjectName();
    const taskId = tasksArray.length;
    const regularTask = RegularTask(name, dueDate, desc, currentProject, priority, taskId)

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

export { getInfoNewProject, addProjectToList, getInfoNewQuickList, addItemToList, addQuickTaskToList, getInfoNewRegularTask, addRegularTaskToList }