// Importamos los tipos necesarios
import type { Task } from '../types/Task';

// Aqui definiremos las funciones para interactuar con el localStorage
const STORAGE_KEY = 'todo-list-items';

// Get items from localStorage
export const getItems = (): Task[] => {
    const items = localStorage.getItem(STORAGE_KEY);
    return items ? JSON.parse(items) : [];
};

// Save items to localStorage
export const saveItems = (items: Task[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

// Clear items from localStorage
export const clearItems = () => {
    localStorage.removeItem(STORAGE_KEY);
};

// Update an item in localStorage
export const updateItem = (updatedItem: any) => {
    const items = getItems();
    const index = items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
        items[index] = updatedItem;
        saveItems(items);
    }
};

// Delete an item from localStorage
export const deleteItem = (id: number) => {
    const items = getItems();
    const filteredItems = items.filter((item) => item.id !== id);
    saveItems(filteredItems);
};

// Add a new item to localStorage
export const addItem = (newItem: Task) => {
    const items = getItems();
    items.push(newItem);
    saveItems(items);
    return newItem;
};
