import type { Priority } from './Task';

export type AddTaskPayload = {
    title: string;
    durationMin: number; // siempre en minutos
    priority: Priority;
};

export interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (payload: AddTaskPayload) => void;
}
