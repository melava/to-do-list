import { get, closeOverlay, isDone, clearInput } from './DOMGlobalManipulations'
import { Project } from './projects/factory'
import { projectForm } from './projects/form'
import { editProjectForm } from './projects/edit'
import { printProject } from './projects/print'
import { toggleSelectedProject } from './projects/selection'
import { QuickTask, RegularTask } from './tasks/factory'
import { quickTaskForm, regularTaskForm } from './tasks/form'
import { editTaskForm } from './tasks/edit'
import { printTask, printAddedItem } from './tasks/print'

let projectsArray = [];
let quickList = [];
let tasksArray = [];
let archivedTasksArray = [];

// -------------- MODEL -------------- //
const getFormInfos = (formType) => {
    if (formType === 'project') {
        const name = get.name().value;
        const type = get.type().value;
        const projectId = projectsArray.length;
        const status = 0;
        const project = Project(type, name, projectId, status);
        return project
    } else if (formType === 'quicklist') {
        const dueDate = get.dueDate().value;
        const getList = quickList.map(item => item);
        const taskId = tasksArray.length;
        const currentProject = get.project().value;
        const status = 0;
        const project = QuickTask(dueDate, getList, currentProject, taskId, status)
        return project
    } else if (formType === 'regular') {
        const name = get.name().value;
        const dueDate = get.dueDate().value;
        const desc = get.description().value;
        const priority = get.priority().value;
        const currentProject = get.project().value;
        const taskId = tasksArray.length;
        const status = 0;
        const project = RegularTask(name, dueDate, desc, currentProject, priority, taskId, status)
        return project
    } else if (formType === 'listItem') {
        const item = get.item().value;
        return item
    }
}

const updateInfos = (formType, index) => {
    if (formType === 'project') {
        const oldName = projectsArray[index].name;
        projectsArray[index].name = get.name().value;
        const project = Project(projectsArray[index].type, projectsArray[index].name, index, projectsArray[index].status)
        tasksArray.forEach(task => {
            if (task.project === oldName) {
                task.project = project.name;
            }
        });
        // console.log(tasksArray)
        return { project, oldName }
    } else if (formType === 'quicklist') {
        tasksArray[index].dueDate = get.dueDate().value;
        const oldList = tasksArray[index].list;
        const newList = quickList.map(item => item);
        const fullList = oldList.concat(newList);
        tasksArray[index].list = fullList.map(item => item);
        const task = QuickTask(tasksArray[index].dueDate, tasksArray[index].list, tasksArray[index].project, index, tasksArray[index].status)
        // console.log(tasksArray)
        return task
    } else if (formType === 'regular') {
        tasksArray[index].name = get.name().value;
        tasksArray[index].dueDate = get.dueDate().value;
        tasksArray[index].description = get.description().value;
        tasksArray[index].priority = get.priority().value;
        const task = RegularTask(tasksArray[index].name, tasksArray[index].dueDate, tasksArray[index].description, tasksArray[index].project, tasksArray[index].priority, index, tasksArray[index].status)
        // console.log(tasksArray)
        return task
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
    } else if (formType === 'listItem') {
        object ? validity = true : validity = false;
        return validity
    }
}

const updateStatus = (type, index) => {
    let arr;
    type === 'project' ? arr = projectsArray : arr = tasksArray;
    arr[index].status === 0 ? arr[index].status = 1 : arr[index].status = 0;
}

const addToArray = (formType, object) => {
    if (formType === 'project') {
        projectsArray.push(object);
        return projectsArray
    } else if (formType === 'quicklist') {
        emptyListArray();
        tasksArray.push(object);
        return tasksArray
    } else if (formType === 'regular') {
        tasksArray.push(object);
        return tasksArray
    } else if (formType === 'listItem') {
        quickList.push(object);
        return quickList
    }
}

const emptyListArray = () => {
    quickList = [];
}

const removeFromArray = (index) => {
    archivedTasksArray.push(tasksArray[index])
    tasksArray.splice(index, 1, '*archived*')
    return archivedTasksArray[archivedTasksArray.length-1]
}

const getTaskInfos = (index) => {
    return tasksArray[index]
}


// -------------- CONTROL VIEW -------------- //
const print = (action, object, formType) => {
    if (formType === 'project') {
        printProject(object, action);
        if (action === 'new') {
            closeOverlay()
        }
    } else if (formType === 'quicklist' || formType === 'regular') {
        printTask(action, object, formType);
        if (action !== 'delete') {
            closeOverlay()
        }
    } else if (formType === 'listItem') {
        printAddedItem(object);
        clearInput(get.item().node)
    }
}

// -------------- CONTROLLER -------------- //
const clickListener = (e) => {
    const clickedNode = e.target;
    const clickedProject = e.target.closest('div.project');
    const clickedTask = e.target.closest('div.task');
    const form = e.target.closest('div.form');

    if ((clickedNode.id === 'add-project' || clickedNode.id === 'add-todo') && !document.getElementById('name')) { console.log('add button'), chooseForm(clickedNode) }
    else if (clickedProject) { console.log('click on project list'), chooseProjectAction(clickedNode, clickedProject) }
    else if (form && clickedNode.id === 'submit' || clickedNode.id === 'add-item') { console.log('submit a form'), submitForm(form, clickedNode) }
    else if (clickedTask && !document.getElementById('name')) { console.log('clicked on a task'), chooseTaskAction(clickedNode, clickedTask) }
    else if (clickedNode.id === 'update') { console.log('update task'), updateTask(clickedNode, form)}
}

const chooseForm = (target) => {
    if (target.id === 'add-project') {
        projectForm();
    } else {
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

const chooseProjectAction = (target, project) => {
    if (target.className.includes('ballot')) { 
        updateStatus('project', project.dataset.index);
        isDone(project, target);
    } else if (target.className.includes('project-action') && !document.getElementById('name')) {
        if (!project.className.includes('selected')) {
            toggleSelectedProject(project);
        }
        editProjectForm(project.childNodes[1]);
    } else if (target.className.includes('project-action') && project.childNodes[1].tagName !== 'DIV') {
        updateProject(project);
    } else {
        if (project.className.includes('selected') && project.childNodes[1].tagName === 'DIV') {
            editProjectForm(project.childNodes[1]);
        } else if (!project.className.includes('selected') && !document.getElementById('name')) {
            toggleSelectedProject(project);
        }
    }
}

const chooseTaskAction = (target, task) => {
    // console.log(target);
    if (target.className.includes('ballot') && target.closest('div#list-container')) { 
        isDone(target.parentNode, target);
    } else if (target.className.includes('edit')) { 
        const taskObject = getTaskInfos(task.dataset.index);
        editTaskForm(task, taskObject);
    } else if (target.className.includes('delete')) { 
        const taskObject = removeFromArray(task.dataset.index);
        deleteTask(task, taskObject)
    } else if (target.className.includes('status')) { 
        updateStatus('task', task.dataset.index);
        isDone(target.parentNode);
    }
}

const submitForm = (formNode, target) => {
    const action = 'new';
    let formType;
    if (target.id === 'add-item') {
        formType = 'listItem';
    } else {
        formType = formNode.className.replace(/-*form/g, '').trim();
    }
    const object = getFormInfos(formType);
    const valid = checkValidity(formType, object);
    if (valid) {
        addToArray(formType, object);
        print(action, object, formType);
    } else {
        console.log('invalid');
        formType === 'quicklist' || formType === 'listItem' ? get.item().node.focus() : get.name().node.focus();
    }
}

const updateProject = (project) => {
    const action = 'edit';
    const formType = 'project';
    const index = project.dataset.index;
    const object = updateInfos(formType, index);
    const valid = checkValidity(formType, object.project);
    if (valid) {
        print(action, object, formType);
    } else {
        console.log('invalid');
        get.name().node.focus();
    }
}

const updateTask = (task, formNode) => {
    const action = 'edit';
    const formType = formNode.className.replace(/-*form/g, '').trim();
    const index = task.dataset.taskIndex;
    const object = updateInfos(formType, index);
    const valid = checkValidity(formType, object);
    if (valid) {
        emptyListArray();
        print(action, object, formType)
    } else {
        console.log('invalid');
        formType === 'quicklist' ? get.item().node.focus() : get.name().node.focus();
    }
}

const deleteTask = (task, object) => {
    const action = 'delete';
    let formType;
    if (object.description) {
        formType = 'regular';
    } else {
        formType = 'quicklist';
    }
    print(action, task, formType);
}

// ----------------------------------CALLS
// add some prototype project and tasks to start the page
const initiatePage = (() => {
    const protoQuick = Project('quick', 'prototype-shopping-list', 0, 0);
    const protoReg = Project('regular', 'prototype-classic-project', 1, 0);
    const testQuickTask = QuickTask('2021-03-02', ['aaa', 'bbb'], 'prototype-shopping-list', 0, 0);
    const testRegTask = RegularTask('task prototype', '2021-03-09', 'description: lorem ipsum dolor sic amat.', 'prototype-classic-project', 'normal', 1, 0);
    addToArray('project', protoQuick);
    addToArray('project', protoReg);
    addToArray('quicklist', testQuickTask);
    addToArray('regular', testRegTask);
    printTask('new', testQuickTask, 'quicklist');
    printTask('new', testRegTask, 'regular');
    printProject(protoQuick, 'new');
    printProject(protoReg, 'new');
})();
document.addEventListener('click', clickListener)

export { projectsArray, tasksArray, quickList }