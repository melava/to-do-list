import { quickListProjects, postitProjects } from '../DOMGlobalManipulations'
import { filterTasks } from '../tasks/filter'
import { editProjectForm } from '../projects/edit'


const isProjectSelected = (e) => {
    const projectNode = e.target.closest('div.project');
    if (!projectNode) { 
        return 
    } else if (projectNode.className.includes('selected') && projectNode.childNodes[0].tagName === 'DIV') {
        editProjectForm(projectNode.childNodes[0])
    } else if (!projectNode.className.includes('selected')) {
        toggleSelectedProject();
        projectNode.classList.add('selected');
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