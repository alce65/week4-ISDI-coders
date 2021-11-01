import { useContext } from 'react';
import { ReduxContext } from '../../../contexts/ReduxContextProvider';
import { Card } from '../../core/card';
import { Add } from './add';
import { Task } from './task';

export function List() {
  const { tasks } = useContext(ReduxContext);

  const htmlTasks = tasks.map((item) => <Task key={item.id} item={item} />);
  const template = (
    <div>
      <h2>Lista de tareas by Redux</h2>
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
