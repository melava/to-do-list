import { quickListProjects, postitProjects } from '../index'
import { isProjectSelected, toggleSelectedProject } from './selection'
import { filterTasks } from '../tasks/filter'


const printProject = (project) => {
    const card = document.createElement('div');
    card.classList.add('project');
    card.classList.add(project.type);
    card.setAttribute('data-index', project.id);
    card.textContent = `${project.name}`;
    project.type === 'quick' ? quickListProjects.appendChild(card) : postitProjects.appendChild(card);
    toggleSelectedProject();
    card.classList.add('selected');
    filterTasks();
    card.addEventListener('click', isProjectSelected);
};

export { printProject }