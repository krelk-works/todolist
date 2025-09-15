// src/i18n/config.ts
// Core i18next library.
import i18n from 'i18next';
// import type { escape } from 'querystring';
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from 'react-i18next';

i18n
    // Add React bindings as a plugin.
    .use(initReactI18next)
    // Initialize the i18next instance.
    .init({
        // Config options

        // Specifies the default language (locale) used
        // when a user visits our site for the first time.
        // We use English here, but feel free to use
        // whichever locale you want.
        lng: 'es',

        // Fallback locale used when a translation is
        // missing in the active locale. Again, use your
        // preferred locale here.
        fallbackLng: 'en',

        // Enables useful output in the browser’s
        // dev console.
        debug: true,

        // Normally, we want `escapeValue: true` as it
        // ensures that i18next escapes any code in
        // translation messages, safeguarding against
        // XSS (cross-site scripting) attacks. However,
        // React does this escaping itself, so we turn
        // it off in i18next.
        interpolation: {
            escapeValue: false,
        },

        // Translation messages. Add any languages
        // you want here.
        resources: {
            // English
            en: {
                // `translation` is the default namespace.
                // More details about namespaces shortly.
                translation: {
                    appTitle: 'To-Do List',
                    addTask: 'Add Task',
                    titlePlaceholder: 'Task Title',
                    durationPlaceholder: 'Duration in minutes',
                    priorityLabel: 'Priority',
                    priorityLow: 'Low',
                    priorityMedium: 'Medium',
                    priorityHigh: 'High',
                    cancelButton: 'Cancel',
                    addButton: 'Add',
                    completeButton: 'Complete',
                    deleteButton: 'Delete',
                    editButton: 'Edit',
                    confirmButton: 'Confirm',
                    modalCompleteTitle: 'Do you want to complete the task?',
                    modalDeleteTitle: 'Do you want to delete the task?',
                    modalEditTitle: 'Edit Task',
                    noTasks: 'No tasks available.',
                    taskCompleted: 'Task completed',
                    taskDeleted: 'Task deleted',
                    taskAdded: 'Task added',
                    taskEdited: 'Task edited',
                    deadlineLabel: 'Deadline:',
                    minutesLabel: 'minutes',
                    yes: 'Yes',
                    no: 'No',
                    task: 'Task',
                    reservedRights: 'All rights reserved.',
                    hourLabel: 'hour',
                    hoursLabel: 'hours',
                    noTaskSelectedToComplete: 'No task selected to complete.',
                    noTaskSelectedToDelete: 'No task selected to delete',
                    taskNotFoundToDelete:
                        'The task to delete was not found in the list.',
                    errorDeletingTask: 'Error deleting task',
                    completed: 'Completed',
                    outoftime: 'Out of time',
                },
            },
            // Spanish
            es: {
                translation: {
                    appTitle: 'Lista de Tareas',
                    addTask: 'Agregar Tarea',
                    titlePlaceholder: 'Título de la tarea',
                    durationPlaceholder: 'Duración en minutos',
                    priorityLabel: 'Prioridad',
                    priorityLow: 'Baja',
                    priorityMedium: 'Media',
                    priorityHigh: 'Alta',
                    cancelButton: 'Cancelar',
                    addButton: 'Agregar',
                    completeButton: 'Completar',
                    deleteButton: 'Eliminar',
                    editButton: 'Editar',
                    confirmButton: 'Confirmar',
                    modalCompleteTitle: '¿Desea completar la tarea?',
                    modalDeleteTitle: '¿Desea eliminar la tarea?',
                    modalEditTitle: 'Editar Tarea',
                    noTasks: 'No hay tareas disponibles.',
                    taskCompleted: 'Tarea completada',
                    taskDeleted: 'Tarea eliminada',
                    taskAdded: 'Tarea agregada',
                    taskEdited: 'Tarea editada',
                    deadlineLabel: 'Plazo:',
                    minutesLabel: 'minutos',
                    yes: 'Sí',
                    no: 'No',
                    task: 'Tarea',
                    reservedRights: 'Todos los derechos reservados.',
                    hourLabel: 'hora',
                    hoursLabel: 'horas',
                    noTaskSelectedToComplete:
                        'No hay tarea seleccionada para completar.',
                    errorCompletingTask: 'Error al completar la tarea',
                    noTaskSelectedToDelete:
                        'No hay tarea seleccionada para eliminar',
                    taskNotFoundToDelete:
                        'La tarea a eliminar no se encontró en la lista.',
                    errorDeletingTask: 'Error al eliminar la tarea',
                    completed: 'Completada',
                    outoftime: 'Fuera de tiempo',
                },
            },
            // Romanian
            ro: {
                translation: {
                    appTitle: 'Lista de sarcini',
                    addTask: 'Adaugă sarcină',
                    titlePlaceholder: 'Titlul sarcinii',
                    durationPlaceholder: 'Durata în minute',
                    priorityLabel: 'Prioritate',
                    priorityLow: 'Scăzută',
                    priorityMedium: 'Mediu',
                    priorityHigh: 'Ridicată',
                    cancelButton: 'Anulează',
                    addButton: 'Adaugă',
                    completeButton: 'Finalizează',
                    deleteButton: 'Șterge',
                    editButton: 'Editează',
                    confirmButton: 'Confirmă',
                    modalCompleteTitle: 'Doriți să finalizați sarcina?',
                    modalDeleteTitle: 'Doriți să ștergeți sarcina?',
                    modalEditTitle: 'Editează sarcina',
                    noTasks: 'Nu există sarcini disponibile.',
                    taskCompleted: 'Sarcină finalizată',
                    taskDeleted: 'Sarcină ștearsă',
                    taskAdded: 'Sarcină adăugată',
                    taskEdited: 'Sarcină editată',
                    deadlineLabel: 'Termen limită:',
                    minutesLabel: 'minute',
                    yes: 'Da',
                    no: 'Nu',
                    task: 'Sarcină',
                    reservedRights: 'Toate drepturile rezervate.',
                    hourLabel: 'oră',
                    hoursLabel: 'ore',
                    noTaskSelectedToComplete:
                        'Nicio sarcină selectată pentru finalizare.',
                    noTaskSelectedToDelete:
                        'Nicio sarcină selectată pentru ștergere',
                    taskNotFoundToDelete:
                        'Sarcina de șters nu a fost găsită în listă.',
                    errorDeletingTask: 'Eroare la ștergerea sarcinii',
                    completed: 'Completată',
                    outoftime: 'Timp expirat',
                },
            },
            // French
            fr: {
                translation: {
                    appTitle: 'Liste de Tâches',
                    addTask: 'Ajouter une Tâche',
                    titlePlaceholder: 'Titre de la tâche',
                    durationPlaceholder: 'Durée en minutes',
                    priorityLabel: 'Priorité',
                    priorityLow: 'Basse',
                    priorityMedium: 'Moyenne',
                    priorityHigh: 'Haute',
                    cancelButton: 'Annuler',
                    addButton: 'Ajouter',
                    completeButton: 'Compléter',
                    deleteButton: 'Supprimer',
                    editButton: 'Modifier',
                    confirmButton: 'Confirmer',
                    modalCompleteTitle: 'Voulez-vous compléter la tâche ?',
                    modalDeleteTitle: 'Voulez-vous supprimer la tâche ?',
                    modalEditTitle: 'Modifier la tâche',
                    noTasks: 'Aucune tâche disponible.',
                    taskCompleted: 'Tâche complétée',
                    taskDeleted: 'Tâche supprimée',
                    taskAdded: 'Tâche ajoutée',
                    taskEdited: 'Tâche modifiée',
                    deadlineLabel: 'Date limite :',
                    minutesLabel: 'minutes',
                    yes: 'Oui',
                    no: 'Non',
                    task: 'Tâche',
                    reservedRights: 'Tous droits réservés.',
                    hourLabel: 'heure',
                    hoursLabel: 'heures',
                    noTaskSelectedToComplete:
                        'Aucune tâche sélectionnée pour compléter.',
                    noTaskSelectedToDelete:
                        'Aucune tâche sélectionnée pour supprimer',
                    taskNotFoundToDelete:
                        'La tâche à supprimer est introuvable dans la liste.',
                    errorDeletingTask:
                        'Erreur lors de la suppression de la tâche',
                    completed: 'Complétée',
                    outoftime: 'Temps écoulé',
                },
            },
            // Italian
            it: {
                translation: {
                    appTitle: 'Lista delle Cose da Fare',
                    addTask: 'Aggiungi Attività',
                    titlePlaceholder: "Titolo dell'attività",
                    durationPlaceholder: 'Durata in minuti',
                    priorityLabel: 'Priorità',
                    priorityLow: 'Bassa',
                    priorityMedium: 'Media',
                    priorityHigh: 'Alta',
                    cancelButton: 'Annulla',
                    addButton: 'Aggiungi',
                    completeButton: 'Completa',
                    deleteButton: 'Elimina',
                    editButton: 'Modifica',
                    confirmButton: 'Conferma',
                    modalCompleteTitle: "Vuoi completare l'attività?",
                    modalDeleteTitle: "Vuoi eliminare l'attività?",
                    modalEditTitle: "Modifica l'attività",
                    noTasks: 'Nessuna attività disponibile.',
                    taskCompleted: 'Attività completata',
                    taskDeleted: 'Attività eliminata',
                    taskAdded: 'Attività aggiunta',
                    taskEdited: 'Attività modificata',
                    deadlineLabel: 'Scadenza:',
                    minutesLabel: 'minuti',
                    yes: 'Sì',
                    no: 'No',
                    task: 'Attività',
                    reservedRights: 'Tutti i diritti riservati.',
                    hourLabel: 'ora',
                    hoursLabel: 'ore',
                    noTaskSelectedToComplete:
                        'Nessuna attività selezionata da completare.',
                    noTaskSelectedToDelete:
                        'Nessuna attività selezionata da eliminare',
                    taskNotFoundToDelete:
                        "L'attività da eliminare non è stata trovata nell'elenco.",
                    errorDeletingTask:
                        "Errore durante l'eliminazione dell'attività",
                    completed: 'Completata',
                    outoftime: 'Tempo scaduto',
                },
            },
            // German
            de: {
                translation: {
                    appTitle: 'Aufgabenliste',
                    addTask: 'Aufgabe hinzufügen',
                    titlePlaceholder: 'Titel der Aufgabe',
                    durationPlaceholder: 'Dauer in Minuten',
                    priorityLabel: 'Priorität',
                    priorityLow: 'Niedrig',
                    priorityMedium: 'Mittel',
                    priorityHigh: 'Hoch',
                    cancelButton: 'Abbrechen',
                    addButton: 'Hinzufügen',
                    completeButton: 'Abschließen',
                    deleteButton: 'Löschen',
                    editButton: 'Bearbeiten',
                    confirmButton: 'Bestätigen',
                    modalCompleteTitle: 'Möchten Sie die Aufgabe abschließen?',
                    modalDeleteTitle: 'Möchten Sie die Aufgabe löschen?',
                    modalEditTitle: 'Bearbeiten Sie die Aufgabe',
                    noTasks: 'Keine Aufgaben verfügbar.',
                    taskCompleted: 'Aufgabe abgeschlossen',
                    taskDeleted: 'Aufgabe gelöscht',
                    taskAdded: 'Aufgabe hinzugefügt',
                    taskEdited: 'Aufgabe bearbeitet',
                    deadlineLabel: 'Frist:',
                    minutesLabel: 'Minuten',
                    yes: 'Ja',
                    no: 'Nein',
                    task: 'Aufgabe',
                    reservedRights: 'Alle Rechte vorbehalten.',
                    hourLabel: 'Stunde',
                    hoursLabel: 'Stunden',
                    noTaskSelectedToComplete:
                        'Keine Aufgabe zum Abschließen ausgewählt.',
                    noTaskSelectedToDelete:
                        'Keine Aufgabe zum Löschen ausgewählt',
                    taskNotFoundToDelete:
                        'Die zu löschende Aufgabe wurde in der Liste nicht gefunden.',
                    errorDeletingTask: 'Fehler beim Löschen der Aufgabe',
                    completed: 'Abgeschlossen',
                    outoftime: 'Zeit abgelaufen',
                },
            },
            // Portuguese
            pt: {
                translation: {
                    appTitle: 'Lista de Tarefas',
                    addTask: 'Adicionar Tarefa',
                    titlePlaceholder: 'Título da tarefa',
                    durationPlaceholder: 'Duração em minutos',
                    priorityLabel: 'Prioridade',
                    priorityLow: 'Baixa',
                    priorityMedium: 'Média',
                    priorityHigh: 'Alta',
                    cancelButton: 'Cancelar',
                    addButton: 'Adicionar',
                    completeButton: 'Completar',
                    deleteButton: 'Excluir',
                    editButton: 'Editar',
                    confirmButton: 'Confirmar',
                    modalCompleteTitle: 'Você deseja completar a tarefa?',
                    modalDeleteTitle: 'Você deseja excluir a tarefa?',
                    modalEditTitle: 'Editar a tarefa',
                    noTasks: 'Nenhuma tarefa disponível.',
                    taskCompleted: 'Tarefa completada',
                    taskDeleted: 'Tarefa excluída',
                    taskAdded: 'Tarefa adicionada',
                    taskEdited: 'Tarefa editada',
                    deadlineLabel: 'Data limite:',
                    minutesLabel: 'minutos',
                    yes: 'Sim',
                    no: 'Não',
                    task: 'Tarefa',
                    reservedRights: 'Todos os direitos reservados.',
                    hourLabel: 'hora',
                    hoursLabel: 'horas',
                    noTaskSelectedToComplete:
                        'Nenhuma tarefa selecionada para completar.',
                    noTaskSelectedToDelete:
                        'Nenhuma tarefa selecionada para excluir',
                    taskNotFoundToDelete:
                        'A tarefa a ser excluída não foi encontrada na lista.',
                    errorDeletingTask: 'Erro ao excluir a tarefa',
                    completed: 'Completada',
                    outoftime: 'Fora do tempo',
                },
            },
            // Bulgarian
            bg: {
                translation: {
                    appTitle: 'Списък със задачи',
                    addTask: 'Добави задача',
                    titlePlaceholder: 'Заглавие на задачата',
                    durationPlaceholder: 'Продължителност в минути',
                    priorityLabel: 'Приоритет',
                    priorityLow: 'Нисък',
                    priorityMedium: 'Среден',
                    priorityHigh: 'Висок',
                    cancelButton: 'Отказ',
                    addButton: 'Добави',
                    completeButton: 'Завърши',
                    deleteButton: 'Изтрий',
                    editButton: 'Редактирай',
                    confirmButton: 'Потвърди',
                    modalCompleteTitle: 'Искате ли да завършите задачата?',
                    modalDeleteTitle: 'Искате ли да изтриете задачата?',
                    modalEditTitle: 'Редактиране на задачата',
                    noTasks: 'Няма налични задачи.',
                    taskCompleted: 'Задачата е завършена',
                    taskDeleted: 'Задачата е изтрита',
                    taskAdded: 'Задачата е добавена',
                    taskEdited: 'Задачата е редактирана',
                    deadlineLabel: 'Краен срок:',
                    minutesLabel: 'минути',
                    yes: 'Да',
                    no: 'Не',
                    task: 'Задача',
                    reservedRights: 'Всички права запазени.',
                    hourLabel: 'час',
                    hoursLabel: 'часа',
                    noTaskSelectedToComplete:
                        'Не е избрана задача за завършване.',
                    noTaskSelectedToDelete: 'Не е избрана задача за изтриване',
                    taskNotFoundToDelete:
                        'Задачата за изтриване не е намерена в списъка.',
                    errorDeletingTask: 'Грешка при изтриване на задачата',
                    completed: 'Завършена',
                    outoftime: 'Изтекло време',
                },
            },
            // Turkish
            tr: {
                translation: {
                    appTitle: 'Yapılacaklar Listesi',
                    addTask: 'Görev Ekle',
                    titlePlaceholder: 'Görev Başlığı',
                    durationPlaceholder: 'Süre (dakika)',
                    priorityLabel: 'Öncelik',
                    priorityLow: 'Düşük',
                    priorityMedium: 'Orta',
                    priorityHigh: 'Yüksek',
                    cancelButton: 'İptal',
                    addButton: 'Ekle',
                    completeButton: 'Tamamla',
                    deleteButton: 'Sil',
                    editButton: 'Düzenle',
                    confirmButton: 'Onayla',
                    modalCompleteTitle: 'Görevi tamamlamak istiyor musunuz?',
                    modalDeleteTitle: 'Görevi silmek istiyor musunuz?',
                    modalEditTitle: 'Görevi düzenle',
                    noTasks: 'Mevcut görev yok.',
                    taskCompleted: 'Görev tamamlandı',
                    taskDeleted: 'Görev silindi',
                    taskAdded: 'Görev eklendi',
                    taskEdited: 'Görev düzenlendi',
                    deadlineLabel: 'Son Tarih:',
                    minutesLabel: 'dakika',
                    yes: 'Evet',
                    no: 'Hayır',
                    task: 'Görev',
                    reservedRights: 'Tüm hakları saklıdır.',
                    hourLabel: 'saat',
                    hoursLabel: 'saatler',
                    noTaskSelectedToComplete: 'Tamamlanacak görev seçilmedi.',
                    noTaskSelectedToDelete: 'Silinecek görev seçilmedi',
                    taskNotFoundToDelete: 'Silinecek görev listede bulunamadı.',
                    errorDeletingTask: 'Görev silinirken hata oluştu',
                    completed: 'Tamamlandı',
                    outoftime: 'Süre doldu',
                },
            },
        },
    });

export default i18n;
