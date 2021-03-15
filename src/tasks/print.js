import { taskContainer, createTask } from '../DOMGlobalManipulations'

const printAddedItem = (lastItem) => {
    if (lastItem) {
        const ul = document.getElementById('quick-task-list');
        const li = document.createElement('li');
        li.textContent = lastItem;
        ul.appendChild(li);
    }
}

const printQuickTask = (task) => {
    const postit = createTask.taskConstructor('quick', task)
    taskContainer.appendChild(postit)
}

const printRegularTask = (task) => {
    const postit = createTask.taskConstructor('regular', task)
    taskContainer.appendChild(postit);
}

export { printAddedItem, printQuickTask, printRegularTask }