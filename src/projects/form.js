import { container, closeOverlay, formFactory, getSubmitButton } from '../DOMGlobalManipulations'
import { getInfoNewProject, addProjectToList } from '../index'
import { printProject } from './print'

const projectForm = () => {
    const form = formFactory();
    
    const radioContainer = form.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);
    const textContainer = form.containerConstructor('text', 'name', 'Project name');
    const submitContainer = form.containerConstructor('submit', 'submit', 'New project');
    
    const overlay = form.createOverlay('project', [radioContainer, textContainer, submitContainer]);
    container.appendChild(overlay);
    
    textContainer.lastChild.focus()
    
    const submitButton = getSubmitButton();
    submitButton.addEventListener('click', () => { 
        let project = getInfoNewProject(); 
        if (project.name) {
            addProjectToList(project); 
            printProject(project); 
            closeOverlay() 
        } else {
            console.log('Error: no name project');
            textContainer.lastChild.focus();
        }
    })
}

export { projectForm }