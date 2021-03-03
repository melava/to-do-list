import { taskContainer } from '../DOMGlobalManipulations'

const filterTasks = () => {
    taskContainer.childNodes.forEach(task => {
        const currentSelectedProject = document.getElementsByClassName('selected')[0].textContent;
        if(task.dataset.project === currentSelectedProject){
            task.classList.remove('hidden')
        } else {
            task.classList.add('hidden')
        }
    });
}

export { filterTasks }