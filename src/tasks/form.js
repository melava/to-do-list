import { container, clearInput, closeOverlay, formFactory, getSubmitButton, getAddItemButton, getItem, getItemNode } from '../DOMGlobalManipulations'
import { addItemToList, getInfoNewQuickList, addQuickTaskToList, getInfoNewRegularTask, addRegularTaskToList } from '../index.js'
import { printAddedItem, printQuickTask, printRegularTask } from './print'

const quickTaskForm = () => {
    const form = formFactory();
    
    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');
    const textContainer = form.containerConstructor('text', 'item', 'List item');
    const ul = document.createElement('ul');
    ul.id = 'quick-task-list';
    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit list');
    
    const overlay = form.createOverlay('quicklist', [dueDateContainer, textContainer, ul, submitContainer]);
    container.appendChild(overlay);

    getItemNode().focus();
    
    const addItem = getAddItemButton();
    addItem.addEventListener('click', () => { 
        if (getItem()) {
            addItemToList(getItem()); 
            printAddedItem(getItem());
            clearInput(getItemNode())
        } else {
            console.log('error: empty item');
            getItemNode().focus();
        }
    })
    
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', () => { 
        let quickList = getInfoNewQuickList(); 
        if (quickList.list.length > 0) {
            addQuickTaskToList(quickList); 
            printQuickTask(quickList); 
            closeOverlay() 
        } else {
            console.log('error : empty list');
            getItemNode().focus();
        }
    })
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
    
    textContainer.lastChild.focus()
        
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', () => { 
        let regularTask = getInfoNewRegularTask(); 
        if (regularTask.name) {
            addRegularTaskToList(regularTask); 
            printRegularTask(regularTask); 
            closeOverlay() 
        } else {
            console.log('error: no name');
            textContainer.lastChild.focus();
        }
    })
}

export { quickTaskForm, regularTaskForm }