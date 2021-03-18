const QuickTask = (dueDate, list, project, id, status) => {
    return { dueDate, list, project, id, status }
}

const RegularTask = (name, dueDate, description, project, priority, id, status) => {
    return { name, dueDate, description, project, priority, id, status }
}

export { QuickTask, RegularTask }