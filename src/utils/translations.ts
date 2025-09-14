const spanish = {
    appTitle: "Lista de Tareas",
    addTask: "Agregar Tarea",
    titlePlaceholder: "Título de la tarea",
    durationPlaceholder: "Duración en minutos",
    priorityLabel: "Prioridad",
    priorityLow: "Baja",
    priorityMedium: "Media",
    priorityHigh: "Alta",
    cancelButton: "Cancelar",
    addButton: "Agregar",
    completeButton: "Completar",
    deleteButton: "Eliminar",
    editButton: "Editar",
    confirmButton: "Confirmar",
    modalCompleteTitle: "¿Desea completar la tarea?",
    modalDeleteTitle: "¿Desea eliminar la tarea?",
    modalEditTitle: "Editar Tarea",
    noTasks: "No hay tareas disponibles.",
    taskCompleted: "Tarea completada",
    taskDeleted: "Tarea eliminada",
    taskAdded: "Tarea agregada",
    taskEdited: "Tarea editada",
    deadlineLabel: "Plazo:",
    minutesLabel: "minutos",
    yes: "Sí",
    no: "No",
    task: "Tarea",
}

const english = {
    appTitle: "To-Do List",
    addTask: "Add Task",
    titlePlaceholder: "Task Title",
    durationPlaceholder: "Duration in minutes",
    priorityLabel: "Priority",
    priorityLow: "Low",
    priorityMedium: "Medium",
    priorityHigh: "High",
    cancelButton: "Cancel",
    addButton: "Add",
    completeButton: "Complete",
    deleteButton: "Delete",
    editButton: "Edit",
    confirmButton: "Confirm",
    modalCompleteTitle: "Do you want to complete the task?",
    modalDeleteTitle: "Do you want to delete the task?",
    modalEditTitle: "Edit Task",
    noTasks: "No tasks available.",
    taskCompleted: "Task completed",
    taskDeleted: "Task deleted",
    taskAdded: "Task added",
    taskEdited: "Task edited",
    deadlineLabel: "Deadline:",
    minutesLabel: "minutes",
    yes: "Yes",
    no: "No",
    task: "Task",
    errorAddingTask: "Error adding task",
    errorDeletingTask: "Error deleting task",
    errorCompletingTask: "Error completing task",
    errorEditingTask: "Error editing task",
}

export const getTranslation = () => {
    const browserLang = navigator.language;
    if (browserLang.startsWith('es')) {
        return spanish;
    } else {
        return english;
    }
}
