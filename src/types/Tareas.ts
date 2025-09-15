/**
 * Objeto de lista de tareas a emplear de forma genérica
 * {
 * id: number,
 * name: string,
 * done: boolean,
 * timeToEnd: number | null,
 * priority: 'low' | 'medium' | 'high',
 * }
 */

export interface Tarea {
    id: number;
    name: string;
    done: boolean;
    timeToEnd: number;
    priority: 'low' | 'medium' | 'high';
}

export type Priority = 'low' | 'medium' | 'high';
