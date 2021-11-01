import { useContext } from 'react';
import { TasksContext } from '../../../contexts/TasksContextProvider';
import { Card } from '../../core/card';
import { Add } from './add';
import { Task } from './task';

export function List() {
  const { tasks } = useContext(TasksContext);

  const htmlTasks = tasks.map((item) => <Task key={item.id} item={item} />);
  const template = (
    <div>
      <h2>Lista de tareas by Context</h2>
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
