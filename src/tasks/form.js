import { container, clearInput, closeOverlay, createOverlay, formFactory, getSubmitButton, getAddItemButton, getItem, getItemNode } from '../DOMGlobalManipulations'
import { addItemToList, getInfoNewQuickList, addQuickTaskToList, getInfoNewRegularTask, addRegularTaskToList } from '../index.js'
import { printAddedItem, printQuickTask, printRegularTask } from './print'

const quickTaskForm = () => {
    const overlay = createOverlay();
    const formContainer = overlay.firstChild;
    formContainer.classList.add('quicklist');
    
    const form = formFactory();

    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');
    formContainer.appendChild(dueDateContainer);

    const textContainer = form.containerConstructor('text', 'item', 'List item');
    formContainer.appendChild(textContainer);

    const ul = document.createElement('ul');
    ul.id = 'quick-task-list';
    formContainer.appendChild(ul);

    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit list');
    formContainer.appendChild(submitContainer);

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
    const overlay = createOverlay();
    const formContainer = overlay.firstChild;
    formContainer.classList.add('regular');
    
    const form = formFactory();

    const textContainer = form.containerConstructor('text', 'name', 'Name');
    formContainer.appendChild(textContainer);

    const textareaContainer = form.containerConstructor('textarea', 'description', 'Description');
    formContainer.appendChild(textareaContainer);

    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');
    formContainer.appendChild(dueDateContainer);

    const priorityContainer = form.containerConstructor('select', 'priority', 'Priority', ['low', 'normal', 'high']);
    formContainer.appendChild(priorityContainer);

    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit task');
    formContainer.appendChild(submitContainer);

    overlay.appendChild(formContainer);
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