
const taskContainer = document.getElementById('task-container')

const filterTasks = () => {
    taskContainer.childNodes.forEach(task => {
        const currentSelectedProject = document.getElementsByClassName('selected')[0].textContent;
        if(task.dataset.project === currentSelectedProject){
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    });
}

export { filterTasks }