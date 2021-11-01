import { useEffect } from 'react';
// import { Context } from "../../../contexts/ContextProvider";
import { useFinalTasks } from '../../../hooks/finalTasks';
import { Card } from '../../core/card';
import { Add } from './add';
import { Task } from './task';

export function List() {
  const { tasks, loadTasks } = useFinalTasks();

  useEffect(() => {
    // función del custom hoook que desencadena el cambio de estado
    // cargando los datos del API
    loadTasks();
  }, [loadTasks]);

  const htmlTasks = tasks.map((item) => <Task key={item.id} item={item} />);
  const template = (
    <div>
      <h2>Lista de tareas by Redux (from API)</h2>
      <div id="formAddTask">
        <Card title="Añadir tarea">
          <Add />
        </Card>
      </div>
      <ul>{htmlTasks}</ul>
    </div>
  );

  return template;
}
