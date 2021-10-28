import { taskActionTypes } from "./actiontypes";

export const loadTasks = (tasks) => {
  return {
    type: taskActionTypes.load,
    tasks,
  };
};

export const addTask = (task) => {
  return {
    type: taskActionTypes.add,
    task,
  };
};

export const toggleTask = (id) => {
  return {
    type: taskActionTypes.toggle,
    id,
  };
};

export const deleteTasks = (id) => {
  return {
    type: taskActionTypes.remove,
    id,
  };
};
