import { container, createOverlay, closeOverlay, formFactory, getSubmitButton } from '../DOMGlobalManipulations'
import { getInfoNewProject, addProjectToList } from '../index'
import { printProject } from './print'

const projectForm = () => {
    const overlay = createOverlay();
    const formContainer = overlay.firstChild;
    formContainer.classList.add('project');
    
    const form = formFactory();
    
    const radioContainer = form.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);
    formContainer.appendChild(radioContainer);
    
    const textContainer = form.containerConstructor('text', 'name', 'Project name');
    formContainer.appendChild(textContainer);
    
    const submitContainer = form.containerConstructor('submit', 'submit', 'New project');
    formContainer.appendChild(submitContainer);

    overlay.appendChild(formContainer);
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