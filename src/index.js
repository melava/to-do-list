import { addProject, addToDo, get, closeOverlay } from './DOMGlobalManipulations'
import { Project } from './projects/factory'
import { projectForm } from './projects/form'
import { printProject, unPrintProject, editPrint } from './projects/print'
import { isProjectSelected } from './projects/selection'
import { QuickTask, RegularTask } from './tasks/factory'
import { filterTasks } from './tasks/filter'
import { quickTaskForm, regularTaskForm } from './tasks/form'
import { printQuickTask, printRegularTask } from './tasks/print'

let projectsArray = [];
let quickList = [];
let tasksArray = [];

const chooseTaskForm = () => {
    if (!document.getElementById('name')) {
        const projectSelected = get.project().node;
        if (projectSelected.className.includes('quick')) {
            quickTaskForm();
        } else if (projectSelected.className.includes('regular')) {
            regularTaskForm();
        } else {
            console.log('ho no, there isn\'t any project selected!')
        }
    }
}

const getFormInfos = (formType) => {
    if (formType === 'project') {
        const name = get.name().value;
        const type = get.type().value;
        const projectId = projectsArray.length;
        const project = Project(type, name, projectId);
        return project
    } else if (formType === 'quicklist') {
        const dueDate = get.dueDate().value;
        const getList = quickList.map(item => item);
        const taskId = tasksArray.length;
        const currentProject = get.project().value;
        const project = QuickTask(dueDate, getList, currentProject, taskId)
        return project
    } else if (formType === 'regular') {
        const name = get.name().value;
        const dueDate = get.dueDate().value;
        const desc = get.description().value;
        const priority = get.priority().value;
        const currentProject = get.project().value;
        const taskId = tasksArray.length;
        const project = RegularTask(name, dueDate, desc, currentProject, priority, taskId)
        return project
    }
}

const updateInfos = (formType, index) => {
    if (formType === 'project') {
        const oldName = projectsArray[index].name;
        projectsArray[index].name = get.name().value;
        const project = Project(projectsArray[index].type, projectsArray[index].name, index)
        tasksArray.forEach(task => {
            if (task.project === oldName) {
                task.project = project.name;
                const allTasks = Array.from(get.allTasks());
                allTasks.forEach(taskNode => {
                    if (taskNode.dataset.project === oldName) {
                        taskNode.dataset.project = project.name;
                    }
                });
                // console.log(allTasks)
            }
        });
        // console.log(tasksArray)
        return project
    } else if (formType === 'quicklist') {
        const dueDate = get.dueDate().value;
        const getList = quickList.map(item => item);
        const taskId = tasksArray.length;
        const currentProject = get.project().value;
        const project = QuickTask(dueDate, getList, currentProject, taskId)
        return project
    } else if (formType === 'regular') {
        const name = get.name().value;
        const dueDate = get.dueDate().value;
        const desc = get.description().value;
        const priority = get.priority().value;
        const currentProject = get.project().value;
        const taskId = tasksArray.length;
        const project = RegularTask(name, dueDate, desc, currentProject, priority, taskId)
        return project
    }
}

const addItemToList = (item) => {
    quickList.push(item)
    return quickList
}

const addToArray = (formType, object) => {
    if (formType === 'project') {
        projectsArray.push(object);
        return projectsArray
    } else if (formType === 'quicklist') {
        quickList = [];
        tasksArray.push(object);
        return tasksArray
    } else if (formType === 'regular') {
        tasksArray.push(object);
        return tasksArray
    }
}

const print = (formType, object) => {
    if (formType === 'project') {
        printProject(object);
    } else if (formType === 'quicklist') {
        printQuickTask(object);
    } else if (formType === 'regular') {
        printRegularTask(object);
    }
}

const unPrint = (formType, object) => {
    if (formType === 'project') {
        unPrintProject(object);
    } else if (formType === 'quicklist') {
        // printQuickTask(object);
    } else if (formType === 'regular') {
        // printRegularTask(object);
    }
}

const checkValidity = (formType, object) => {
    let validity;
    if (formType === 'project') {
        object.name ? validity = true : validity = false;
        return validity
    } else if (formType === 'quicklist') {
        object.list.length > 0 ? validity = true : validity = false;
        return validity
    } else if (formType === 'regular') {
        object.name ? validity = true : validity = false;
        return validity
    }
}

const dispatchSubmit = (e) => {
    const formType = e.target.closest('div.form').className.replace('form', '').trim();
    const object = getFormInfos(formType);
    const valid = checkValidity(formType, object);
    if (valid) {
        const list = addToArray(formType, object);
        print(formType, object);
        closeOverlay();
        // console.log(list)
    } else {
        console.log('invalid');
        
        formType === 'quicklist' ? get.item().node.focus() : get.name().node.focus();
    }
}

const dispatchUpdate = (e) => {
    const elementToUpdate = () => {
        if (e.target.parentNode.className.includes('project')) {
            const index = e.target.parentNode.dataset.index;
            const type = 'project';
            return { type, index }
        }
    }
    const formType = elementToUpdate().type;
    const index = elementToUpdate().index;
    
    const object = updateInfos(formType, index);
    const valid = checkValidity(formType, object);
    if (valid) {
        const parentNode = e.target.parentNode
        unPrint(formType, parentNode);
        editPrint(object, parentNode);
    } else {
        console.log('invalid');
        
        formType === 'quicklist' ? get.item().node.focus() : get.name().node.focus();
    }
}

// ----------------------------------CALLS
// add some prototype project and tasks to start the page
const initiatePage = (() => {
    const protoQuick = Project('quick', 'prototype-shopping-list', 0);
    const protoReg = Project('regular', 'prototype-classic-project', 1);
    const testQuickTask = QuickTask('2021-03-02', ['aaa', 'bbb'], 'prototype-shopping-list', 0);
    const testRegTask = RegularTask('task prototype', '2021-03-09', 'description: lorem ipsum dolor sic amat.', 'prototype-classic-project', 'normal', 1);
    addToArray('project', protoQuick);
    addToArray('project', protoReg);
    addToArray('quicklist', testQuickTask);
    addToArray('regular', testRegTask);
    printQuickTask(testQuickTask);
    printRegularTask(testRegTask);
    printProject(protoQuick);
    printProject(protoReg);
})();
addProject.addEventListener('click', () => { projectForm('new') });
addToDo.addEventListener('click', chooseTaskForm);

// document.addEventListener('click', (e) => {if (e.clientX < 30 && e.target.className.includes('project')) {console.log(e)}})
export { projectsArray, tasksArray }
export { addItemToList, dispatchSubmit, dispatchUpdate }
