import { container, formFactory, getName, getSubmitButton } from '../DOMGlobalManipulations'
import { dispatchSubmit } from '../index'

const projectForm = () => {
    const form = formFactory();
    
    const radioContainer = form.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);
    const textContainer = form.containerConstructor('text', 'name', 'Project name');
    const submitContainer = form.containerConstructor('submit', 'submit', 'New project');
    
    const overlay = form.createOverlay('project', [radioContainer, textContainer, submitContainer]);
    container.appendChild(overlay);
    
    getName().node.focus()
    
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', dispatchSubmit)
}

export { projectForm }