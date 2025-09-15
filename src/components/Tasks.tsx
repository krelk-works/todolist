import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { useTranslation } from 'react-i18next';
import { getItems, saveItems } from '@/services/LocalStorage';
import type { Task } from '@/types/Task';
import {
    getBgColorForPercentage,
    getClassNameForPriority,
    getPercentageToDeadline,
} from '@/utils/tasks';
import { Modal } from './Modal';

export const Tasks = () => {
    const [currentList, setCurrentList] = React.useState<Task[]>([]);
    const [currentSortedList, setCurrentSortedList] = React.useState<Task[]>(
        []
    );
    // Modal de confirmación de completado o eliminación ---------------------------------
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState<'complete' | 'delete'>(
        'complete'
    );
    const [modalTaskName, setModalTaskName] = React.useState('');
    const [modalTaskId, setModalTaskId] = React.useState<number>(0);
    // -----------------------------------------------------------------------------------
    // Variables para la funcionalidad de traducción
    const { t } = useTranslation();

    // Cargar las tareas al montar el componente
    React.useEffect(() => {
        setCurrentList(getItems());

        // Loop para actualizar el progreso cada 5 segundos
        const interval = setInterval(() => {
            setCurrentList(getItems());
        }, 5000); // 5000 ms = 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    // Ordenar por prioridad y deadline cada vez que cambie la lista
    // TODO: Cambiar el trigger por un currentList.length para evitar loop infinito
    React.useEffect(() => {
        const sortedList = [...currentList].sort((a, b) => {
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return a.timeToEnd - b.timeToEnd;
        });
        setCurrentSortedList(sortedList);
    }, [currentList]);

    // Función para manejar la apertura del modal para completar tareas
    const handleModalComplete = (id: number, name: string) => {
        setModalTaskId(id);
        setModalTaskName(name);
        setModalType('complete');
        setIsModalOpen(true);
    };

    const handleModalDelete = (id: number, name: string) => {
        setModalTaskId(id);
        setModalTaskName(name);
        setModalType('delete');
        setIsModalOpen(true);
    };

    const handleActions = () => {
        if (modalType === 'complete') {
            handleComplete();
        } else if (modalType === 'delete') {
            handleDelete();
        }
    };

    const handleComplete = () => {
        // Si no hay tarea seleccionada retornamos sin realizar acción alguna
        if (!modalTaskId) {
            console.warn(t('noTaskSelectedToComplete'));
            return;
        }

        // Cerramos el modal
        setIsModalOpen(false);

        // Generamos una nueva lista con la tarea marcada como completada
        const updatedList = currentList.map((tarea) => {
            if (tarea.id === modalTaskId) {
                return { ...tarea, done: true };
            }
            return tarea;
        });

        try {
            // Actualizamos el estado de las listas
            setCurrentList(updatedList);

            // Guardamos la lista actualizada en el localStorage
            saveItems(updatedList);
        } catch (error) {
            console.error(t('errorCompletingTask'), error);
        }
    };

    const handleDelete = () => {
        // Si no hay tarea seleccionada retornamos sin realizar acción alguna
        if (!modalTaskId) {
            console.warn(t('noTaskSelectedToDelete'));
            return;
        }

        // Cerramos el modal
        setIsModalOpen(false);

        // Generamos una nueva lista sin la tarea eliminada
        const updatedList = currentList.filter(
            (tarea) => tarea.id !== modalTaskId
        );
        if (updatedList.length === currentList.length) {
            console.warn(t('taskNotFoundToDelete'));
            return;
        }

        try {
            setCurrentList(updatedList);
            saveItems(updatedList);
        } catch (error) {
            console.error(t('errorDeletingTask'), error);
        }
    };

    const getPriorityLabel = (priority: string) => {
        switch (priority) {
            case 'high':
                return t('priorityHigh');
            case 'medium':
                return t('priorityMedium');
            case 'low':
                return t('priorityLow');
            default:
                return '';
        }
    };

    return (
        <>
            {currentList && (
                <div className='p-2 w-full relative'>
                    <Modal
                        isOpen={isModalOpen}
                        type={modalType}
                        onClose={() => setIsModalOpen(false)}
                        name={modalTaskName}
                        onConfirm={() => handleActions()}
                    />

                    {currentSortedList.map((task) => {
                        // calcular una sola vez
                        const pctRaw = getPercentageToDeadline(
                            task.timeToEnd,
                            task.id
                        );
                        const pct = Math.max(0, Math.min(100, pctRaw)); // clamp 0..100
                        const isActive = !task.done && pct > 0;
                        const isOverdue = !task.done && pct <= 0;
                        const bgClass = getBgColorForPercentage(pct);
                        const priorityClass = getClassNameForPriority(
                            task.priority
                        );

                        return (
                            <div
                                key={task.id}
                                className={`p-2 rounded shadow-lg relative mb-2 bg-white border-b ${task.done ? 'border-green-500' : 'border-gray-300'}`}
                            >
                                <h2 className='text-lg font-semibold pb-2'>
                                    {task.name}
                                </h2>
                                <p className='text-sm text-gray-500 pb-2'>
                                    {t('priorityLabel')}{' '}
                                    <span
                                        className={`font-bold ${priorityClass}`}
                                    >
                                        {getPriorityLabel(task.priority)}
                                    </span>
                                </p>
                                <p className='text-sm text-gray-500 pb-2'>
                                    {t('deadlineLabel')} {task.timeToEnd}{' '}
                                    {t('minutesLabel')}.
                                </p>

                                {/* Progress bar */}
                                {isActive && (
                                    <div className='w-full bg-gray-300 rounded-full h-2'>
                                        <div
                                            className={`${bgClass} h-2 rounded-full transition-[width] duration-300`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                )}

                                {/* Botones estado */}
                                {isActive && (
                                    <button
                                        className='mt-2 bg-gray-500 text-white py-1 px-4 rounded absolute right-5 top-7 hover:bg-green-600 cursor-pointer shadow-sm hover:px-5 transition-all duration-300'
                                        onClick={() =>
                                            handleModalComplete(
                                                task.id,
                                                task.name
                                            )
                                        }
                                    >
                                        {t('completeButton')}
                                    </button>
                                )}

                                {task.done && (
                                    <button className='mt-2 bg-green-500 text-white py-1 px-4 rounded absolute right-5 top-7 shadow-sm'>
                                        {t('completed')}{' '}
                                        <CheckCircleIcon fontSize='small' />
                                    </button>
                                )}

                                {isOverdue && (
                                    <button
                                        id={`deadline-${task.id}`}
                                        className='mt-2 bg-red-600 text-white py-1 px-4 rounded absolute right-5 top-7 shadow-sm'
                                    >
                                        {t('outoftime')}{' '}
                                        <HourglassEmptyIcon fontSize='small' />
                                    </button>
                                )}

                                <CancelIcon
                                    className='absolute right-5 -top-2 cursor-pointer text-gray-600 hover:text-red-600 filter drop-shadow-md'
                                    onClick={() => {
                                        handleModalDelete(task.id, task.name);
                                    }}
                                />
                            </div>
                        );
                    })}

                    {currentList.length === 0 && (
                        <p className='text-center text-gray-500 mt-10'>
                            <FormatListBulletedIcon fontSize='small' />{' '}
                            {t('noTasks')}
                        </p>
                    )}
                </div>
            )}
        </>
    );
};
