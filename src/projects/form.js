import { getInfoNewProject } from '../index'

const container = document.getElementById('content-container');

const projectForm = () => {
    const overlay = document.createElement('div');
    overlay.id = 'form-overlay';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form')
    overlay.appendChild(formContainer);
    
    const radioContainer = document.createElement('div');
    radioContainer.id = 'radio-container';
    const labelQuick = document.createElement('label');
    labelQuick.setAttribute('for','quick');
    labelQuick.textContent = 'Quick List';
    const inputQuick = document.createElement('input');
    inputQuick.type = 'radio';
    inputQuick.name = 'type';
    inputQuick.value = 'quick';
    inputQuick.id = 'quick';
    const labelRegular = document.createElement('label');
    labelRegular.setAttribute('for','regular');
    labelRegular.textContent = 'Regular List';
    const inputRegular = document.createElement('input');
    inputRegular.type = 'radio';
    inputRegular.name = 'type';
    inputRegular.value = 'regular';
    inputRegular.id = 'regular';
    radioContainer.appendChild(inputQuick);
    radioContainer.appendChild(labelQuick);
    radioContainer.appendChild(inputRegular);
    radioContainer.appendChild(labelRegular);
    formContainer.appendChild(radioContainer);

    const textContainer = document.createElement('div');
    textContainer.id = 'text-container';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'name';
    const labelName = document.createElement('label');
    labelName.setAttribute('for','name');
    labelName.textContent = 'Project\'s name';
    textContainer.appendChild(labelName);
    textContainer.appendChild(inputName);
    formContainer.appendChild(textContainer);

    const submitContainer = document.createElement('div');
    submitContainer.id = 'submit-container';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Create project';
    submitButton.id = 'create-project'
    submitContainer.appendChild(submitButton);
    formContainer.appendChild(submitContainer);

    container.appendChild(overlay);

    submitButton.addEventListener('click', () => { getInfoNewProject(); closeOverlay() } )
}

const closeOverlay = () => {
    const overlay = document.getElementById('form-overlay');
    container.removeChild(overlay);
}

export { projectForm, closeOverlay }