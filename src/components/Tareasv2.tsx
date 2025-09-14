import React from 'react'
import type { Tarea } from '../types/Tareas'
import { getItems, saveItems } from '../services/LocalStorage';
import { getBgColorForPercentage, getClassNameForPriority, getPercentageToDeadline } from '../utils/tareasCss';
import { Modal } from './Modal';
import type { Translation } from '../types/Translation';

// Iconos MUI
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// Función para obtener las traducciones
import { getTranslation } from '../utils/translations';

export const Tareasv2 = () => {
    const [currentList, setCurrentList] = React.useState<Tarea[]>([]);
    const [currentSortedList, setCurrentSortedList] = React.useState<Tarea[]>([]);
    // Modal de confirmación de completado o eliminación ---------------------------------
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState<'complete' | 'delete'>('complete');
    const [modalTaskName, setModalTaskName] = React.useState('');
    const [modalTaskId, setModalTaskId] = React.useState<number>(0);
    // -----------------------------------------------------------------------------------
    // Variables para la funcionalidad de traducción
	const [translations, setTranslations] = React.useState<Translation>();

    // Cargar las tareas al montar el componente
    React.useEffect(() => {
        setCurrentList(getItems());

        // Obtener las traducciones
        if (!translations) {
            setTranslations(getTranslation());
        }

        // Loop para actualizar el progreso cada 5 segundos
        const interval = setInterval(() => {
            setCurrentList(getItems());
        }, 5000); // 5000 ms = 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    // Ordenar por prioridad y deadline cada vez que cambie la lista
    React.useEffect(() => {
        const sortedList = [...currentList].sort((a, b) => {
            const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
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
    }

    const handleModalDelete = (id: number, name: string) => {
        setModalTaskId(id);
        setModalTaskName(name);
        setModalType('delete');
        setIsModalOpen(true);
    }

    const handleActions = () => {
        if (modalType === 'complete') {
            handleComplete();
        } else if (modalType === 'delete') {
            handleDelete();
        }
    }

    const handleComplete = () => {
        // Si no hay tarea seleccionada retornamos sin realizar acción alguna
        if (!modalTaskId) {
            console.warn("No hay tarea seleccionada para completar.");
            return;
        }

        // Cerramos el modal
        setIsModalOpen(false);

        // Generamos una nueva lista con la tarea marcada como completada
        const updatedList = currentList.map(tarea => {
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
            console.error("Error al completar la tarea:", error);
        }
    }

    const handleDelete = () => {
        // Si no hay tarea seleccionada retornamos sin realizar acción alguna
        if (!modalTaskId) {
            console.warn("No hay tarea seleccionada para eliminar.");
            return;
        }

        // Cerramos el modal
        setIsModalOpen(false);

        // Generamos una nueva lista sin la tarea eliminada
        const updatedList = currentList.filter(tarea => tarea.id !== modalTaskId);
        if (updatedList.length === currentList.length) {
            console.warn("La tarea a eliminar no se encontró en la lista.");
            return;
        }

        try {
            setCurrentList(updatedList);
            saveItems(updatedList);
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
        }
    }

    return (
        <>
            {currentList && (
                <div className="p-2 w-full relative">
                    <Modal
                        isOpen={isModalOpen}
                        type={modalType}
                        onClose={() => setIsModalOpen(false)}
                        name={modalTaskName}
                        onConfirm={() => handleActions()}
                    />

                    {currentSortedList.map((tarea) => {
                        // calcular una sola vez
                        const pctRaw = getPercentageToDeadline(tarea.timeToEnd, tarea.id);
                        const pct = Math.max(0, Math.min(100, pctRaw)); // clamp 0..100
                        const isActive = !tarea.done && pct > 0;
                        const isOverdue = !tarea.done && pct <= 0;
                        const bgClass = getBgColorForPercentage(pct);
                        const priorityClass = getClassNameForPriority(tarea.priority);

                        return (
                            <div
                                key={tarea.id}
                                className={`p-2 rounded shadow-lg relative mb-2 bg-white border-b ${tarea.done ? 'border-green-500' : 'border-gray-300'}`}
                            >
                                <h2 className="text-lg font-semibold pb-2">{tarea.name}</h2>
                                <p className="text-sm text-gray-500 pb-2">
                                    {translations?.priorityLabel}{" "}
                                    <span className={`font-bold ${priorityClass}`}>{tarea.priority}</span>
                                </p>
                                <p className="text-sm text-gray-500 pb-2">
                                    {translations?.deadlineLabel} {tarea.timeToEnd} minutos.
                                </p>

                                {/* Progress bar */}
                                {isActive && (
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div
                                            className={`${bgClass} h-2 rounded-full transition-[width] duration-300`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                )}

                                {/* Botones estado */}
                                {isActive && (
                                    <button
                                        className="mt-2 bg-gray-500 text-white py-1 px-4 rounded absolute right-5 top-7 hover:bg-green-600 cursor-pointer shadow-sm hover:px-5 transition-all duration-300"
                                        onClick={() => handleModalComplete(tarea.id, tarea.name)}
                                    >
                                        Completar
                                    </button>
                                )}

                                {tarea.done && (
                                    <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded absolute right-5 top-7 shadow-sm">
                                        Completada <CheckCircleIcon fontSize="small" />
                                    </button>
                                )}

                                {isOverdue && (
                                    <button
                                        id={`deadline-${tarea.id}`}
                                        className="mt-2 bg-red-600 text-white py-1 px-4 rounded absolute right-5 top-7 shadow-sm"
                                    >
                                        Fuera de tiempo <HourglassEmptyIcon fontSize="small" />
                                    </button>
                                )}

                                <CancelIcon
                                    className="absolute right-5 -top-2 cursor-pointer text-gray-600 hover:text-red-600 filter drop-shadow-md"
                                    onClick={() => {
                                        handleModalDelete(tarea.id, tarea.name);
                                    }}
                                />
                            </div>
                        );
                    })}

                    {currentList.length === 0 && (
                        <p className="text-center text-gray-500 mt-10"><FormatListBulletedIcon fontSize="small" /> {translations?.noTasks}</p>
                    )}
                </div>
            )}

        </>
    )
}
