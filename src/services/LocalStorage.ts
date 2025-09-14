// Importamos los tipos necesarios
import type { Tarea } from '../types/Tareas';

// Aqui definiremos las funciones para interactuar con el localStorage
const STORAGE_KEY = 'todo-list-items';

// Get items from localStorage
export const getItems = (): Tarea[] => {
  const items = localStorage.getItem(STORAGE_KEY);
  return items ? JSON.parse(items) : [];
}

// Save items to localStorage
export const saveItems = (items: Tarea[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Clear items from localStorage
export const clearItems = () => {
  localStorage.removeItem(STORAGE_KEY);
}

// Update an item in localStorage
export const updateItem = (updatedItem: any) => {
  const items = getItems();
    const index = items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      items[index] = updatedItem;
      saveItems(items);
    }
}

// Delete an item from localStorage
export const deleteItem = (id: number) => {
  const items = getItems();
  const filteredItems = items.filter(item => item.id !== id);
  saveItems(filteredItems);
}

// Add a new item to localStorage
export const addItem = (newItem: Tarea) => {
    const items = getItems();
    items.push(newItem);
    saveItems(items);
    return newItem;
}