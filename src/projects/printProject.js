import { quickListProjects, postitProjects } from '../index'
import { isProjectSelected, toggleSelectedProject } from './selectProject'


const printProject = (project) => {
    const card = document.createElement('div');
    card.classList.add('project');
    card.classList.add(project.type);
    card.textContent = `${project.name}`;
    project.type === 'quick' ? quickListProjects.appendChild(card) : postitProjects.appendChild(card);
    toggleSelectedProject();
    card.classList.add('selected');
    card.addEventListener('click', isProjectSelected);
};

export { printProject }