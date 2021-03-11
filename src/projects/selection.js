import { quickListProjects, postitProjects } from '../DOMGlobalManipulations'
import { filterTasks } from '../tasks/filter';


const toggleSelectedProject = (newSelectedProject) => {
    quickListProjects.childNodes.forEach(child => {
        if (child.className.includes('selected')) {
            child.classList.remove('selected')
        }
    });
    postitProjects.childNodes.forEach(child => {
        if (child.className.includes('selected')) {
            child.classList.remove('selected')
        }
    });
    newSelectedProject.classList.add('selected');
    filterTasks(newSelectedProject.childNodes[1].textContent)
}

export { toggleSelectedProject }