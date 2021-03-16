import { quickListProjects, postitProjects, get, createProject } from '../DOMGlobalManipulations'
import { toggleSelectedProject } from './selection'


const printProject = (object, action) => {
    if (action === 'new') {
        const newProject = createProject.projectConstructor(object);
        object.type === 'quick' ? quickListProjects.appendChild(newProject) : postitProjects.appendChild(newProject);
        toggleSelectedProject(newProject);
    } else if (action === 'edit') {
        const oldProject = get.project().node;
        const newProject = createProject.projectConstructor(object.project);
        object.project.type === 'quick' ? quickListProjects.replaceChild(newProject, oldProject) : postitProjects.replaceChild(newProject, oldProject);
        editProjectTasks(object);
        toggleSelectedProject(newProject);
    } else {
        console.log('no action ?');
    }
};

const editProjectTasks = (object) => {
    const allTasks = Array.from(get.allTasks());
    allTasks.forEach(taskNode => {
        if (taskNode.dataset.project === object.oldName) {
            taskNode.dataset.project = object.project.name;
        }
    });
}

export { printProject }