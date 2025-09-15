// AddTaskModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import type { AddTaskModalProps } from '@/types/AddModal';
import type { Priority } from '@/types/Tareas';

const DURATION_OPTIONS: { label: string; value: number }[] = [
    { label: '5 min', value: 5 },
    { label: '10 min', value: 10 },
    { label: '20 min', value: 20 },
    { label: '30 min', value: 30 },
    { label: '40 min', value: 40 },
    { label: '50 min', value: 50 },
    { label: '1 hora', value: 60 },
    { label: '2 horas', value: 120 },
    { label: '3 horas', value: 180 },
    { label: '4 horas', value: 240 },
    { label: '5 horas', value: 300 },
    { label: '6 horas', value: 360 },
    { label: '7 horas', value: 420 },
    { label: '8 horas', value: 480 },
    { label: '9 horas', value: 540 },
    { label: '10 horas', value: 600 },
    { label: '11 horas', value: 660 },
    { label: '12 horas', value: 720 },
];

export default function AddTaskModal({
    isOpen,
    onClose,
    onAdd,
}: AddTaskModalProps) {
    const [title, setTitle] = useState('');
    const [durationMin, setDurationMin] = useState<number>(30);
    const [priority, setPriority] = useState<Priority>('low');
    const titleRef = useRef<HTMLInputElement>(null);

    // Resetea y enfoca al abrir
    useEffect(() => {
        if (isOpen) {
            setTitle('');
            setDurationMin(30);
            setPriority('low');
            // foco al título en el próximo tick
            setTimeout(() => titleRef.current?.focus(), 0);
        }
    }, [isOpen]);

    // Cierra con Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const canSubmit = title.trim().length > 0 && Number.isFinite(durationMin);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;
        onAdd({ title: title.trim(), durationMin, priority });
        onClose();
    };

    // Evita cerrar al hacer click dentro del cuadro
    const stop = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div
            className='fixed inset-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50 text-gray-800'
            onClick={onClose}
            role='dialog'
            aria-modal='true'
            aria-labelledby='add-task-title'
        >
            <div
                className='bg-white w-[min(92vw,32rem)] rounded-lg shadow-xl p-6'
                onClick={stop}
            >
                <h3 id='add-task-title' className='text-xl font-bold mb-4'>
                    Agregar una nueva tarea
                </h3>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Título */}
                    <div>
                        <label
                            htmlFor='task-title'
                            className='block text-sm font-medium text-gray-700 mb-1'
                        >
                            Título
                        </label>
                        <input
                            id='task-title'
                            ref={titleRef}
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Ej. Preparar presentación'
                            className='w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800'
                        />
                    </div>

                    {/* Duración */}
                    <div>
                        <label
                            htmlFor='task-duration'
                            className='block text-sm font-medium text-gray-700 mb-1'
                        >
                            Duración
                        </label>
                        <select
                            id='task-duration'
                            value={durationMin}
                            onChange={(e) =>
                                setDurationMin(parseInt(e.target.value, 10))
                            }
                            className='w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-800'
                        >
                            {DURATION_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        <p className='mt-1 text-xs text-gray-500'>
                            Valor enviado en minutos.
                        </p>
                    </div>

                    {/* Prioridad */}
                    <div>
                        <label
                            htmlFor='task-priority'
                            className='block text-sm font-medium text-gray-700 mb-1'
                        >
                            Prioridad
                        </label>
                        <select
                            id='task-priority'
                            value={priority}
                            onChange={(e) =>
                                setPriority(e.target.value as Priority)
                            }
                            className='w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-800'
                        >
                            <option value='high'>Alta</option>
                            <option value='medium'>Media</option>
                            <option value='low'>Baja</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className='pt-2 flex justify-end gap-2'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors'
                        >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            disabled={!canSubmit}
                            className={`px-4 py-2 rounded text-white transition-colors
                         ${canSubmit ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            Añadir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
