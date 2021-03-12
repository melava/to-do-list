const editProjectForm = (node) => {
    const input = document.createElement('input');
    input.id = 'name';
    input.value = node.textContent;
    node.parentNode.replaceChild(input, node);
    input.focus();
}

export { editProjectForm }