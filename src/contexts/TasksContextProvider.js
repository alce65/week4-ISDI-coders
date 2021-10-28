import { createContext, useState } from "react";
import { TASKS } from "../models/task.data";

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  toggleCompleteTask: () => {},
  deleteTask: () => {},
});

// Componente "estandar" de react
export function TasksContextProvider({ children }) {
  const addTask = () => {};
  const toggleCompleteTask = () => {};
  const deleteTask = () => {};

  const [tasks, setTasks] = useState(TASKS);
  const context = { tasks, addTask, toggleCompleteTask, deleteTask };
  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
}
