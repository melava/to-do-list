import { quickListProjects, postitProjects } from '../DOMGlobalManipulations'
import { filterTasks } from '../tasks/filter'
import { editProjectForm } from '../projects/edit'


const isProjectSelected = (e) => {
    if (e.target.className.includes('selected')) {
        editProjectForm(e.target.dataset.index)
    } else {
        toggleSelectedProject();
        e.target.classList.add('selected');
        filterTasks();
    }
}

const toggleSelectedProject = () => {
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
}

export { isProjectSelected, toggleSelectedProject }