import { quickListProjects, postitProjects } from '../index'

const isProjectSelected = (e) => {
    if (e.target.className.includes('selected')) {
        console.log('already selected --> edit ')
    } else {
        toggleSelectedProject();
        e.target.classList.add('selected');
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