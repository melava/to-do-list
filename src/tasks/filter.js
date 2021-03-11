import { taskContainer } from '../DOMGlobalManipulations'

const filterTasks = (selectedProject) => {
    taskContainer.childNodes.forEach(task => {
        if(task.dataset.project === selectedProject){
            task.classList.remove('hidden')
        } else {
            task.classList.add('hidden')
        }
    });
}

export { filterTasks }