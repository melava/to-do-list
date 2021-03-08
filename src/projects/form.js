import { container, formFactory, get } from '../DOMGlobalManipulations'
import { dispatchSubmit, dispatchUpdate } from '../index'

const projectForm = (action) => {
    
    const form = formFactory();
    const actionContent = () => {
       if (action === 'new') {
           return 'New Project'
       } else if (action === 'change') {
           return 'Update project'
       }
    }

    const radioContainer = form.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);
    const textContainer = form.containerConstructor('text', 'name', 'Project name');
    const submitContainer = form.containerConstructor('submit', 'submit', actionContent());

    const overlay = form.createOverlay('project', [radioContainer, textContainer, submitContainer]);
    container.appendChild(overlay);
    
    get.name().node.focus()
    
    const submitButton = get.submitButton();
    if (action === 'new') {
        submitButton.addEventListener('click', dispatchSubmit)
    } else if (action === 'change') {
        submitButton.addEventListener('click', dispatchUpdate)
    }
}

export { projectForm }