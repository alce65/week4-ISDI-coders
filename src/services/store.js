import { TASKS } from '../models/task.data';

export const storeName = 'Tareas';
export async function getTasks() {
  /* return localStorage.getItem(storeName)
      ? JSON.parse(localStorage.getItem(storeName))
      : TASKS; */
  const data = localStorage.getItem(storeName);
  let result = [];
  if (data) {
    result = JSON.parse(data);
  } else {
    result = TASKS;
    setTasks(result);
  }
  return result;
}

export async function setTasks(tasks) {
  localStorage.setItem(storeName, JSON.stringify(tasks));
}

export async function removeTasks() {
  localStorage.removeItem(storeName);
}
