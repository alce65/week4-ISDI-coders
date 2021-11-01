/* import { createContext, useEffect, useRef } from "react";

export const FinalReduxContext = createContext({
  tasks: [],
  pending: undefined,
  pendingTasks: () => {},
  addTask: () => {},
  toggleCompleteTask: () => {},
  deleteTask: () => {},
});

// Componente "estandar" de react
export function FinalReduxContextProvider({ children }) {
  // const pendingTasks = useRef(0);

  const pending = useRef(tasks.filter((item) => !item.isCompleted).length);

  useEffect(() => {
    pending.current = tasks.filter((item) => !item.isCompleted).length;
    console.log("Calculando pending:", pending);
  }, [tasks]);

  const context = {
    tasks,
    pendingTasks,
    pending: pending.current,
    addTask,
    toggleCompleteTask,
    deleteTask,
  };
  return (
    <FinalReduxContext.Provider value={context}>
      {children}
    </FinalReduxContext.Provider>
  );
}
 */
