import { quickListProjects, postitProjects, get } from '../DOMGlobalManipulations'
import { isProjectSelected, toggleSelectedProject } from './selection'
import { filterTasks } from '../tasks/filter'
import { editProjectForm } from './edit';


const printProject = (project) => {
    const card = document.createElement('div');
    card.classList.add('project');
    card.classList.add(project.type);
    card.setAttribute('data-index', project.id);
    const content = document.createElement('div');
    content.textContent = `${project.name}`;
    card.appendChild(content);
    const action = document.createElement('button');
    action.classList.add('projectAction');
    action.textContent = '🖉';
    card.appendChild(action);
    project.type === 'quick' ? quickListProjects.appendChild(card) : postitProjects.appendChild(card);
    toggleSelectedProject();
    card.classList.add('selected');
    filterTasks();
    card.addEventListener('click', isProjectSelected);
};

const editPrint = (project, node) => {
    const card = node;
    const content = document.createElement('div');
    content.textContent = `${project.name}`;
    card.appendChild(content);
    const action = document.createElement('button');
    action.classList.add('projectAction');
    action.textContent = '🖉';
    card.appendChild(action);
    toggleSelectedProject();
    card.classList.add('selected');
    filterTasks();
};

const unPrintProject = (object) => {
    let buttons = Array.from(document.getElementsByClassName('projectAction'));
    const button = () => {
        let aButton
        buttons.forEach(button => {
            if (button.closest('div.project') === object) {
                aButton = button;
                return aButton
            }
            return aButton
        });
        return aButton
    }
    const editButton = button()
    const input = get.name().node;
    object.removeChild(editButton);
    object.removeChild(input);
}

export { printProject, unPrintProject, editPrint }