const container = document.getElementById('content-container');

const quickTaskForm = () => {
    const overlay = document.createElement('div');
    overlay.id = 'form-overlay';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form');
    formContainer.classList.add('quicklist');
    overlay.appendChild(formContainer);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.id = 'input-container';
    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'dueDate';
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
    const addItem = document.createElement('div');
    addItem.id = 'add-item';
    addItem.textContent = '+';
    addItem.classList.add('button');
    inputContainer.appendChild(labelName);
    inputContainer.appendChild(inputName);
    inputContainer.appendChild(addItem);
    formContainer.appendChild(inputContainer);

    const submitContainer = document.createElement('div');
    submitContainer.id = 'submit-container';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit list';
    submitButton.id = 'create-list';
    submitContainer.appendChild(submitButton);
    formContainer.appendChild(submitContainer);

    container.appendChild(overlay);

    addItem.addEventListener('click', () => { console.log(inputName) } )
    //submitButton.addEventListener('click', () => { getInfoNewProject(); closeOverlay() } )
}

export { quickTaskForm }