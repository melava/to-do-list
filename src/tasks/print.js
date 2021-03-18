import { get, taskContainer, createTask } from '../DOMGlobalManipulations'

const printAddedItem = (lastItem) => {
    if (lastItem) {
        const ul = document.getElementById('quick-task-list');
        const li = document.createElement('li');
        li.textContent = lastItem;
        ul.appendChild(li);
    }
}

const printTask = (action, task, type) => {
    if (action === 'new') {
        const postit = createTask.taskConstructor(type, task)
        taskContainer.appendChild(postit)
    } else if (action === 'edit') {
        const oldPostit = get.allTasks()[task.id];
        const postit = createTask.taskConstructor(type, task);
        taskContainer.replaceChild(postit, oldPostit);
    } else if (action === 'delete') {
        taskContainer.removeChild(task)
    } else {
        console.log('no action ???');
    }
}

export { printAddedItem, printTask }