import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';
import { getItems, saveItems } from '@/services/LocalStorage';
import type { AddTaskPayload } from '@/types/AddModal';
import type { Task } from '@/types/Task';
import AddTaskModal from './AddTaskModal';

export const Header = () => {
    const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
    const { t } = useTranslation();

    const handleAddTask = (task: AddTaskPayload) => {
        const newTask: Task = {
            id: Date.now(),
            name: task.title,
            done: false,
            timeToEnd: task.durationMin,
            priority: task.priority,
        };

        try {
            const storedTasks = getItems();
            const updatedTasks = [...storedTasks, newTask];
            saveItems(updatedTasks);
            // TODO: Mejorar esto para no recargar toda la página
            window.location.reload(); // Recargar para actualizar la lista
        } catch (error) {
            console.error('Error al agregar tarea:', error);
        }
    };

    return (
        <>
            <header className='bg-blue-600 text-white p-4 flex justify-between items-center shadow-md'>
                <AddTaskModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={(payload) => {
                        handleAddTask(payload);
                        setIsAddModalOpen(false);
                    }}
                />
                <h1 className='sm:font-size-xs md:text-2xl font-bold'>
                    {t('appTitle')}
                </h1>
                <div>
                    <AddCircleIcon
                        className='cursor-pointer m-2 hover:text-green-200 mx-3 sm:font-size-sm'
                        onClick={() => setIsAddModalOpen(true)}
                    />
                </div>
            </header>
        </>
    );
};
