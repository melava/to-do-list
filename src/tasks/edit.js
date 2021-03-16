import { regularTaskForm, quickTaskForm } from './form'
import { set } from '../DOMGlobalManipulations'
import { printAddedItem } from './print'

const editTaskForm = (node, task) => {
    if (node.className.includes('post-it')) {
        regularTaskForm();
        prefillRegularForm(task);
        // console.log(task)
    } else {
        quickTaskForm();
        prefillListForm(task);
        // console.log(task)
    }    
}

const prefillRegularForm = (task) => {
    set.name(task.name);
    set.description(task.description);
    set.dueDate(task.dueDate);
    set.priority(task.priority);
    set.submitButton('Update task', 'update', task.id)
}

const prefillListForm = (task) => {
    set.dueDate(task.dueDate);
    task.list.forEach(item => {
        printAddedItem(item);
    });
    set.submitButton('Update list', 'update', task.id)
}


export { editTaskForm }

