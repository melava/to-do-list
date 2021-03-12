import { taskContainer } from '../DOMGlobalManipulations'


const printAddedItem = (lastItem) => {
    if (lastItem) {
        const ul = document.getElementById('quick-task-list');
        const li = document.createElement('li');
        li.textContent = lastItem;
        ul.appendChild(li);
    }
}

const printQuickTask = (task) => {
    const card = document.createElement('div');
    card.classList.add('task');
    card.setAttribute('data-index', task.id);
    card.setAttribute('data-project', task.project);

    const title = document.createElement('h4');
    title.classList.add('centered');
    title.textContent = task.dueDate;
    card.appendChild(title);

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

    card.appendChild(listContainer)

    taskContainer.appendChild(card);
}

const printRegularTask = (task) => {
    const card = document.createElement('div');
    card.classList.add('task');
    card.classList.add('post-it');
    card.setAttribute('data-index', task.id);
    card.setAttribute('data-project', task.project);

    const title = document.createElement('h4');
    title.classList.add('centered');
    title.textContent = task.name;
    card.appendChild(title);

    const dueDate = document.createElement('p');
    dueDate.classList.add('underline');
    dueDate.textContent = task.dueDate;
    card.appendChild(dueDate);

    const desc = document.createElement('p');
    if (task.description.length > 30) {
        desc.textContent = task.description.slice(0, 30) + ' ...';
    } else {
        desc.textContent = task.description;
    }
    card.appendChild(desc);

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

    

    taskContainer.appendChild(card);
}



export { printAddedItem, printQuickTask, printRegularTask }