import { createContext, useReducer, useEffect, useRef } from "react";
import { tasksReducer } from "../components/tasks/reducers/taskreducer";
import * as actions from "../components/tasks/reducers/actioncreators";
import * as store from "../services/store.http";

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
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  // const pendingTasks = useRef(0);
  useEffect(() => {
    store.getTasks().then((response) => {
      dispatch(actions.loadTasks(response));
    });
  }, []);

  const pendingTasks = () => tasks.filter((item) => !item.isCompleted).length;

  const pending = useRef(tasks.filter((item) => !item.isCompleted).length);

  useEffect(() => {
    pending.current = tasks.filter((item) => !item.isCompleted).length;
    console.log("Calculando pending:", pending);
  }, [tasks]);

  const addTask = (task) => {
    store.setTask(task).then((resp) => {
      dispatch(actions.addTask(resp));
    });
  };

  const toggleCompleteTask = (task) => {
    store.updateTask(task).then((resp) => {
      dispatch(actions.toggleTask(resp.id));
    });
  };

  const deleteTask = (task) => {
    store.removeTask(task.id).then((resp) => {
      if (resp.ok) {
        dispatch(actions.deleteTasks(task.id));
      }
    });
  };

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
