import { useState } from "react";
import { TASKS } from "../../models/task.data";
import { Card } from "../core/card";
import { Add } from "./add";
import { Task } from "./task";

export function List() {
  const [tasks, setTasks] = useState(TASKS);

  const addTask = (task) => {
    //TODO Add task to array
  };
  const toggleCompleteTask = () => {};
  const deleteTask = () => {};

  const htmlTasks = tasks.map((item) => (
    <Task
      key={item.id}
      item={item}
      toggleCompleteTask={toggleCompleteTask}
      deleteTask={deleteTask}
    />
  ));
  const template = (
    <div>
      <h2>Lista de tareas</h2>
      <div id="formAddTask">
        <Card title="Añadir tarea">
          <Add addTask={addTask} />
        </Card>
      </div>
      <ul>{htmlTasks}</ul>
    </div>
  );

  return template;
}

/* let template = `
    <h2>Lista de tareas</h2>
    <div id="formAddTask"></div>
    <ul>`;
this.taskList.forEach((item, i) => {
  template += `....LI....`;
});
template += `</ul>`;
return template; */
