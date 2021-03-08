import { container, clearInput, formFactory, get } from '../DOMGlobalManipulations'
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

    get.item().node.focus();
    
    const addItem = get.addItemButton();
    addItem.addEventListener('click', () => { 
        if (get.item().value) {
            addItemToList(get.item().value); 
            printAddedItem(get.item().value);
            clearInput(get.item().node)
        } else {
            console.log('error: empty item');
            get.item().node.focus();
        }
    })
    
    const submitButton = get.submitButton();
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
    
    get.name().node.focus()
        
    const submitButton = get.submitButton();
    submitButton.addEventListener('click', dispatchSubmit)
}

export { quickTaskForm, regularTaskForm }