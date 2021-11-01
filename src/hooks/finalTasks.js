import { useContext, useCallback } from 'react';
import * as store from '../services/store.http';
import * as actions from '../components/tasks/reducers/actioncreators';
import { Context } from '../contexts/ContextProvider';

// Ejemplo de Custom Hook

/* export class CuseFinalTasks {
  get() {}
  add() {}
  update() {
    this.get()
  }
  delete() {}
}

const helpers = new CuseFinalTasks()
helpers.get() */

export function useFinalTasks() {
  const { tasks, dispatch } = useContext(Context);

  const pendingTasks = () => tasks.filter((item) => !item.isCompleted).length;

  const loadTasks = useCallback(() => {
    store.getTasks().then((response) => {
      dispatch(actions.loadTasks(response));
    });
  }, [dispatch]);

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

  return {
    tasks,
    pendingTasks,
    loadTasks,
    addTask,
    toggleCompleteTask,
    deleteTask,
  };
}
