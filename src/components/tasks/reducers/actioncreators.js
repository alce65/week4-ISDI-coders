import { taskActionTypes } from './actiontypes';

export const loadTasks = (tasks) => ({
  type: taskActionTypes.load,
  tasks,
});

export const addTask = (task) => ({
  type: taskActionTypes.add,
  task,
});

export const toggleTask = (id) => ({
  type: taskActionTypes.toggle,
  id,
});

export const deleteTasks = (id) => ({
  type: taskActionTypes.remove,
  id,
});
