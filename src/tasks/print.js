import { taskContainer } from '../index'


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

    const title = document.createElement('p');
    title.textContent = task.dueDate;
    card.appendChild(title);

    const ul = document.createElement('ul');
    task.list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li)
    });

    card.appendChild(ul)

    taskContainer.appendChild(card);
}

const printRegularTask = (task) => {
    const card = document.createElement('div');
    card.classList.add('task');
    card.classList.add('post-it');
    card.setAttribute('data-index', task.id);
    card.setAttribute('data-project', task.project);

    const title = document.createElement('h4');
    title.textContent = task.name;
    card.appendChild(title);

    const dueDate = document.createElement('p');
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
            card.style.backgroundColor = 'rgb(146, 210, 247)'
            break;
        case 'normal':
            card.style.backgroundColor = 'rgb(247, 227, 115)'
            break;
        case 'high':
            card.style.backgroundColor = 'rgb(206, 126, 126)'
            break;
                
        default:
            card.style.backgroundColor = 'rgb(247, 227, 115)'
            break;
    }

    

    taskContainer.appendChild(card);
}



export { printAddedItem, printQuickTask, printRegularTask }