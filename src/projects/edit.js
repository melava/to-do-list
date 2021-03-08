import { projectsArray, tasksArray } from '../index'
import { get, set } from '../DOMGlobalManipulations'
import { projectForm } from './form'

const editProjectForm = (index) => {
    projectForm('change', index);
    set.type(projectsArray[index].type);
    set.name(projectsArray[index].name);
    tasksArray.forEach(task => {
        if (task.project === projectsArray[index].name) {
            const allTasks = Array.from(get.allTasks())
            allTasks.forEach(taskNode => {
                if (taskNode.dataset.project === task.project) {
                    taskNode.dataset.project = '';
                }
            });
            task.project = ''
        }
    });
}

export { editProjectForm }