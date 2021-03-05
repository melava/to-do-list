import { container, clearInput, formFactory, getSubmitButton, getAddItemButton, getItem, getName } from '../DOMGlobalManipulations'
import { addItemToList, dispatchSubmit } from '../index.js'
import { printAddedItem } from './print'

const quickTaskForm = () => {
    const form = formFactory();
    
    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');
    const textContainer = form.containerConstructor('text', 'item', 'List item');
    const ul = document.createElement('ul');
    ul.id = 'quick-task-list';
    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit list');
    
    const overlay = form.createOverlay('quicklist', [dueDateContainer, textContainer, ul, submitContainer]);
    container.appendChild(overlay);

    getItem().node.focus();
    
    const addItem = getAddItemButton();
    addItem.addEventListener('click', () => { 
        if (getItem().value) {
            addItemToList(getItem().value); 
            printAddedItem(getItem().value);
            clearInput(getItem().node)
        } else {
            console.log('error: empty item');
            getItem().node.focus();
        }
    })
    
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', dispatchSubmit)
}

const regularTaskForm = () => {
    const form = formFactory();
    
    const textContainer = form.containerConstructor('text', 'name', 'Name');
    const textareaContainer = form.containerConstructor('textarea', 'description', 'Description');
    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');
    const priorityContainer = form.containerConstructor('select', 'priority', 'Priority', ['low', 'normal', 'high']);
    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit task');
    
    const overlay = form.createOverlay('regular', [textContainer, textareaContainer, dueDateContainer, priorityContainer, submitContainer]);
    container.appendChild(overlay);
    
    getName().node.focus()
        
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', dispatchSubmit)
}

export { quickTaskForm, regularTaskForm }