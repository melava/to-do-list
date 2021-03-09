import { projectsArray, tasksArray, dispatchUpdate } from '../index'
import { formFactory, get, set } from '../DOMGlobalManipulations'
import { projectForm } from './form'

const editProjectForm = (node) => {
    const submit = node.nextSibling;
    const input = document.createElement('input');
    input.id = 'name';
    input.value = node.textContent;
    node.parentNode.prepend(input);
    node.parentNode.removeChild(node)
    input.focus();
    submit.addEventListener('click', dispatchUpdate)
}

export { editProjectForm }