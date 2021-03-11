import { container, showForm, get } from '../DOMGlobalManipulations'

const quickTaskForm = () => {
    const dueDateContainer = showForm.containerConstructor('date', 'dueDate', 'Due date');
    const textContainer = showForm.containerConstructor('text', 'item', 'List item');
    const ul = document.createElement('ul');
    ul.id = 'quick-task-list';
    const submitContainer = showForm.containerConstructor('submit', 'submit', 'Submit list');
    
    const overlay = showForm.createOverlay('quicklist-form', [dueDateContainer, textContainer, ul, submitContainer]);
    container.appendChild(overlay);

    get.item().node.focus();
}

const regularTaskForm = () => {
    const textContainer = showForm.containerConstructor('text', 'name', 'Name');
    const textareaContainer = showForm.containerConstructor('textarea', 'description', 'Description');
    const dueDateContainer = showForm.containerConstructor('date', 'dueDate', 'Due date');
    const priorityContainer = showForm.containerConstructor('select', 'priority', 'Priority', ['low', 'normal', 'high']);
    const submitContainer = showForm.containerConstructor('submit', 'submit', 'Submit task');
    
    const overlay = showForm.createOverlay('regular-form', [textContainer, textareaContainer, dueDateContainer, priorityContainer, submitContainer]);
    container.appendChild(overlay);
    
    get.name().node.focus()
}

export { quickTaskForm, regularTaskForm }