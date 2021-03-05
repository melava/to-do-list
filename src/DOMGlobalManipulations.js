const container = document.getElementById('content-container');
const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const taskContainer = document.getElementById('task-container')
const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');

const getName = () => document.getElementById('name').value;
const getItem = () => document.getElementById('item').value;
const getItemNode = () => document.getElementById('item');
const getDueDate = () => document.getElementById('dueDate').value;
const getDescription = () => document.getElementById('description').value;
const getPriority = () => document.getElementById('priority').value;
const getProjectName = () => document.getElementsByClassName('selected')[0].textContent;
const getProjectNode = () => document.getElementsByClassName('selected')[0];
const getSubmitButton = () => document.getElementById('submit');
const getAddItemButton = () => document.getElementById('add-item');
const getType = () => {
    let type
    if (document.getElementById('quick').checked) {
        type = document.getElementById('quick').value
    } else if (document.getElementById('regular').checked) {
        type = document.getElementById('regular').value
    }

    return type
}


const formFactory = () => {
    const _container = () => {
        const cont = document.createElement('div');
        cont.classList.add('inner-form-container');
        return cont
    }
    const _label = (value, content) => {
        const label = document.createElement('label');
        label.setAttribute('for', value);
        label.textContent = content;
        return label
    }
    const _radioInput = (value) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'type';
        input.value = value;
        input.id = value;
        return input
    }
    const _textInput = (value) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = value;
        return input
    }
    const _dateInput = (value) => {
        const input = document.createElement('input');
        input.type = 'date';
        input.id = value;
        return input
    }
    const _textArea = (value) => {
        const input = document.createElement('textarea');
        input.id = value;
        input.rows = 5;
        return input
    }
    const _select = (value, options) => {
        const input = document.createElement('select');
        input.id = value;
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            option === 'normal' ? opt.selected = true : opt.selected = false;
            input.appendChild(opt);
        });
        return input
    }
    const _button = (value, content) => {
        const submit = document.createElement('button');
        submit.id = value;
        submit.textContent = content;
        return submit
    }
    
    const createOverlay = (formType, children) => {
        const overlay = document.createElement('div');
        overlay.id = 'form-overlay';
        const formContainer = document.createElement('div');
        formContainer.classList.add('form');
        formContainer.classList.add(formType);
        children.forEach(div => {
            formContainer.appendChild(div)
        });
        overlay.appendChild(formContainer)
        
        return overlay
    }

    const containerConstructor = (type, name, content, options) => {
        const container = _container();
        let label;
        let input;
        let label2;
        let input2;
        switch (type) {
            case 'radio':
                input = _radioInput(name[0]);
                input.checked = true;
                label = _label(name[0], content[0]);
                input2 = _radioInput(name[1]);
                label2 = _label(name[1], content[1]);
                container.appendChild(input);
                container.appendChild(label);
                container.appendChild(input2);
                container.appendChild(label2);
                break;
                case 'text':
                    input = _textInput(name);
                    label = _label(name, content);
                    container.appendChild(label);
                    container.appendChild(input);
                    if (name === 'item') {
                        const addItem = _button('add-item', '+');
                        addItem.classList.add('button');
                        container.appendChild(addItem);
                    }
                    break;
            case 'date':
                input = _dateInput(name);
                input.value = new Date().toISOString().substr(0,10);
                label = _label(name, content);
                container.appendChild(label);
                container.appendChild(input);
                break;
            case 'textarea':
                input = _textArea(name);
                label = _label(name, content);
                container.appendChild(label);
                container.appendChild(input);
                break;
            case 'select':
                input = _select(name, options);
                label = _label(name, content);
                container.appendChild(label);
                container.appendChild(input);
                break;
            case 'submit':
                input = _button(name, content);
                container.appendChild(input);
                break;
        }
        
        return container
    }
    
    return { containerConstructor, createOverlay }
}

const closeOverlay = () => {
    const overlay = document.getElementById('form-overlay');
    container.removeChild(overlay);
}

const clearInput = (input) => {
    input.value = '';
    input.focus()
}

export { container, quickListProjects, postitProjects, taskContainer, addProject, addToDo }
export { getName, getItem, getItemNode, getDueDate, getDescription, getPriority, getProjectName, getProjectNode, getType, getSubmitButton, getAddItemButton }
export { clearInput, closeOverlay, formFactory }