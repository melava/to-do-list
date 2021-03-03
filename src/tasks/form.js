import { container, clearInput, closeOverlay } from '../DOMGlobalManipulations'
import { addItemToList, getInfoNewQuickList, addQuickTaskToList, getInfoNewRegularTask, addRegularTaskToList } from '../index.js'
import { printAddedItem, printQuickTask, printRegularTask } from './print'

const quickTaskForm = () => {
    const overlay = document.createElement('div');
    overlay.id = 'form-overlay';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form');
    formContainer.classList.add('quicklist');
    overlay.appendChild(formContainer);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.id = 'date-container';
    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'dueDate';
    inputDate.value = new Date().toISOString().substr(0,10);
    const labelDate = document.createElement('label');
    labelDate.setAttribute('for','dueDate');
    labelDate.textContent = 'Due date';
    dueDateContainer.appendChild(labelDate);
    dueDateContainer.appendChild(inputDate);
    formContainer.appendChild(dueDateContainer);

    const inputContainer = document.createElement('div');
    inputContainer.id = 'input-container';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'item';
    const labelName = document.createElement('label');
    labelName.setAttribute('for','item');
    labelName.textContent = 'List item';
    const addItem = document.createElement('button');
    addItem.id = 'add-item';
    addItem.textContent = '+';
    addItem.classList.add('button');
    inputContainer.appendChild(labelName);
    inputContainer.appendChild(inputName);
    inputContainer.appendChild(addItem);
    formContainer.appendChild(inputContainer);

    const ul = document.createElement('ul');
    ul.id = 'quick-task-list';
    formContainer.appendChild(ul);

    const submitContainer = document.createElement('div');
    submitContainer.id = 'submit-container';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit list';
    submitButton.id = 'create-list';
    submitContainer.appendChild(submitButton);
    formContainer.appendChild(submitContainer);

    container.appendChild(overlay);
    inputName.focus();

    addItem.addEventListener('click', () => { 
        if (inputName.value) {
            addItemToList(inputName.value); 
            printAddedItem(inputName.value);
            clearInput(inputName)
        } else {
            console.log('error: empty item');
            inputName.focus();
        }
    })
    
    submitButton.addEventListener('click', () => { 
        let quickList = getInfoNewQuickList(); 
        if (quickList.list.length > 0) {
            addQuickTaskToList(quickList); 
            printQuickTask(quickList); 
            closeOverlay() 
        } else {
            console.log('error : empty list');
            inputName.focus();
        }
    })
}

const regularTaskForm = () => {
    const overlay = document.createElement('div');
    overlay.id = 'form-overlay';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form');
    formContainer.classList.add('regular');
    overlay.appendChild(formContainer);

    const inputContainer = document.createElement('div');
    inputContainer.id = 'input-container';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'name';
    const labelName = document.createElement('label');
    labelName.setAttribute('for','name');
    labelName.textContent = 'Name';
    inputContainer.appendChild(labelName);
    inputContainer.appendChild(inputName);
    formContainer.appendChild(inputContainer);

    const textareaContainer = document.createElement('div');
    textareaContainer.id = 'textarea-container';
    const inputDescription = document.createElement('textarea');
    inputDescription.id = 'description';
    inputDescription.rows = 5;
    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for','description');
    labelDescription.textContent = 'Description';
    textareaContainer.appendChild(labelDescription);
    textareaContainer.appendChild(inputDescription);
    formContainer.appendChild(textareaContainer);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.id = 'date-container';
    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'dueDate';
    inputDate.value = new Date().toISOString().substr(0,10);
    const labelDate = document.createElement('label');
    labelDate.setAttribute('for','dueDate');
    labelDate.textContent = 'Due date';
    dueDateContainer.appendChild(labelDate);
    dueDateContainer.appendChild(inputDate);
    formContainer.appendChild(dueDateContainer);
    
    const priorityContainer = document.createElement('div');
    priorityContainer.id = 'priority-container';
    const inputPriority = document.createElement('select');
    inputPriority.id = 'priority';
    const optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.textContent = 'Low';
    const optionNormal = document.createElement('option');
    optionNormal.value = 'normal';
    optionNormal.textContent = 'Normal';
    optionNormal.selected = true;
    const optionHigh = document.createElement('option');
    optionHigh.value = 'high';
    optionHigh.textContent = 'High';
    const labelPriority = document.createElement('label');
    labelPriority.setAttribute('for', 'priority');
    labelPriority.textContent = 'Priority';
    inputPriority.appendChild(optionLow);
    inputPriority.appendChild(optionNormal);
    inputPriority.appendChild(optionHigh);
    priorityContainer.appendChild(labelPriority);
    priorityContainer.appendChild(inputPriority);
    formContainer.appendChild(priorityContainer);

    const submitContainer = document.createElement('div');
    submitContainer.id = 'submit-container';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit task';
    submitButton.id = 'create-task';
    submitContainer.appendChild(submitButton);
    formContainer.appendChild(submitContainer);

    container.appendChild(overlay);
    inputName.focus();

    submitButton.addEventListener('click', () => { 
        let regularTask = getInfoNewRegularTask(); 
        if (regularTask.name) {
            addRegularTaskToList(regularTask); 
            printRegularTask(regularTask); 
            closeOverlay() 
        } else {
            console.log('error: no name');
            inputName.focus();
        }
    })
}

export { quickTaskForm, regularTaskForm }