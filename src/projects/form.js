import { container, get, showForm } from '../DOMGlobalManipulations'

const projectForm = () => {
    const radioContainer = showForm.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);
    const textContainer = showForm.containerConstructor('text', 'name', 'Project name');
    const submitContainer = showForm.containerConstructor('submit', 'submit', 'New Project');
    
    const overlay = showForm.createOverlay('project-form', [radioContainer, textContainer, submitContainer]);
    container.appendChild(overlay);
    
    get.name().node.focus()
}

export { projectForm }