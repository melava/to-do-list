const container = document.getElementById('content-container');
const quickListProjects = document.getElementById('quick-projects');
const postitProjects = document.getElementById('postit-projects');
const taskContainer = document.getElementById('task-container')
const addProject = document.getElementById('add-project');
const addToDo = document.getElementById('add-todo');

const _getter = () => {
    const name = () => {
        const value = document.getElementById('name').value;
        const node = document.getElementById('name');
        return { value, node }
    }
    const type = () => {
        let value;
        let node;
        if (document.getElementById('quick').checked) {
            value = document.getElementById('quick').value;
            node = document.getElementById('quick');
        } else if (document.getElementById('regular').checked) {
            value = document.getElementById('regular').value;
            node = document.getElementById('regular');
    
        }
        return { value, node }
    }
    const item = () => {
        const value = document.getElementById('item').value;
        const node = document.getElementById('item');
        return { value, node }
    }
    const dueDate = () => {
        const value = document.getElementById('dueDate').value;
        const node = document.getElementById('dueDate');
        return { value, node }
    }
    const description = () => {
        const value = document.getElementById('description').value;
        const node = document.getElementById('description');
        return { value, node }
    }
    const priority = () => {
        const value = document.getElementById('priority').value;
        const node = document.getElementById('priority');
        return { value, node }
    }
    const project = () => {
        const value = document.getElementsByClassName('selected')[0].children[1].textContent;
        const node = document.getElementsByClassName('selected')[0];
        return { value, node }
    }
    const allTasks = () => {
        const tasks = document.getElementsByClassName('task');
        return tasks
    }
    const submitButton = () => document.getElementById('submit');
    const addItemButton = () => document.getElementById('add-item');

    return { name, type, item, dueDate, description, priority, project, allTasks, submitButton, addItemButton }
}

const _setter = () => {
    const type = (value) => {
        const newType = document.getElementById(value);
        newType.checked = true
    }

    const name = (value) => {
        get.name().node.value = value
    }



    return { type, name }
}

const _taskFactory = () => {
    const _container = (type, task) => {
        const card = document.createElement('div');
        card.classList.add('task');
        if (type === 'regular'){
            card.classList.add('post-it');
        }
        switch (task.priority) {
            case 'low':
                card.classList.add('priority-low')
                break;
            case 'normal':
                card.classList.add('priority-normal')
                break;
            case 'high':
                card.classList.add('priority-high')
                break;
                    
            default:
                card.classList.add('priority-normal')
                break;
        }
        card.setAttribute('data-index', task.id);
        card.setAttribute('data-project', task.project);

        return card
    }

    const _title = (type, task) => {
        const title = document.createElement('h4');
        title.classList.add('centered');
        type === 'quick' ? title.textContent = task.dueDate : title.textContent = task.name;
        return title
    }
    
    const _list = (task) => {
        const listContainer = document.createElement('div');
        listContainer.id = 'list-container'
        task.list.forEach(item => {
            const line = document.createElement('div');
            const ballot = document.createElement('div');
            ballot.classList.add('ballot');
            const listItem = document.createElement('p');
            listItem.textContent = item;
            line.appendChild(ballot)
            line.appendChild(listItem)
            listContainer.appendChild(line)
        });
        return listContainer
    }

    const _date = (task) => {
        const dueDate = document.createElement('p');
        dueDate.classList.add('underline');
        dueDate.textContent = task.dueDate;
        return dueDate
    }

    const _description = (task) => {
        const desc = document.createElement('p');
        if (task.description.length > 30) {
            desc.textContent = task.description.slice(0, 30) + ' ...';
        } else {
            desc.textContent = task.description;
        }
        return desc
    }

    const _button = (type) => {
        const button = document.createElement('button');
        button.classList.add('task-action');
        button.classList.add(type);
        switch (type) {
            case 'edit':
                button.textContent = '🖉'
                break;
            case 'delete':
                button.textContent = '🗑';
                break;
                  
            default:
                
                break;
        }
        return button
    }
    
    const taskConstructor = (type, task) => {
        const container = _container(type, task);
        const title = _title(type, task);
        container.appendChild(title);
        
        switch (type) {
            case 'quick':
                const list = _list(task);
                container.appendChild(list);
                break;
            case 'regular':
                const date = _date(task);
                container.appendChild(date);
                const description = _description(task);
                container.appendChild(description);
                break;
        }

        const button = _button('edit');
        const button2 = _button('delete');
        container.appendChild(button);
        container.appendChild(button2);
        
        return container
    }
    
    return { taskConstructor }
}

const _formFactory = () => {
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

const isDone = (object, target) => {
    object.classList.toggle('done');
    target.classList.toggle('completed-ballot')
}

const get = _getter();
const set = _setter();
const showForm = _formFactory();
const createTask = _taskFactory();

export { container, quickListProjects, postitProjects, taskContainer, addProject, addToDo }
export { clearInput, closeOverlay, isDone, get, set, showForm, createTask }
