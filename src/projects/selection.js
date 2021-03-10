import { quickListProjects, postitProjects, get } from '../DOMGlobalManipulations'
import { filterTasks } from '../tasks/filter'
import { editProjectForm } from '../projects/edit'
import { dispatchUpdate } from '../index'


const isProjectSelected = (e) => {
    const projectNode = e.target.closest('div.project');
    if (e.target.className.includes('ballot')) { 
        isProjectDone(projectNode);
    } else if (e.target.className.includes('project-action') && !projectNode.className.includes('selected') && !document.getElementById('name')) {
        toggleSelectedProject();
        projectNode.classList.add('selected');
        filterTasks();
        editProjectForm(projectNode.childNodes[1]);
    } else if (e.target.className.includes('project-action') && projectNode.className.includes('selected') && projectNode.childNodes[1].tagName === 'DIV') {
        editProjectForm(projectNode.childNodes[1]);
    } else if (e.target.className.includes('project-action') && projectNode.childNodes[1].tagName !== 'DIV') {
        dispatchUpdate(e);
    } else {
        if (!projectNode) { 
            return 
        } else if (projectNode.className.includes('selected') && projectNode.childNodes[1].tagName === 'DIV') {
            editProjectForm(projectNode.childNodes[1]);
        } else if (!projectNode.className.includes('selected') && !document.getElementById('name')) {
            toggleSelectedProject();
            projectNode.classList.add('selected');
            filterTasks();
        }
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

const isProjectDone = (project) => {
    project.classList.toggle('done');
    project.firstChild.classList.toggle('completed-ballot')
}

export { isProjectSelected, toggleSelectedProject }