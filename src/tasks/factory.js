const QuickTask = (dueDate, list, project, id) => {
    return { dueDate, list, project, id }
}

const RegularTask = (name, dueDate, description, project, priority, id) => {
    return { name, dueDate, description, project, priority, id }
}

export { QuickTask, RegularTask }