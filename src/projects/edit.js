const editProjectForm = (node) => {
    const input = document.createElement('input');
    input.id = 'name';
    input.value = node.textContent;
    node.parentNode.replaceChild(input, node);
    input.focus();
}

const isProjectDone = (project) => {
    project.classList.toggle('done');
    project.firstChild.classList.toggle('completed-ballot')
}


export { editProjectForm, isProjectDone }