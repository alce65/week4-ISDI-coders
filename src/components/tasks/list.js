import { useState, useEffect } from "react";
import { TASKS } from "../../models/task.data";
import { Card } from "../core/card";
import { Add } from "./add";
import { Task } from "./task";
import * as store from "../../services/store";

export function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    store.getTasks().then((response) => {
      setTasks(response);
    });
  }, []);

  const addTask = (task) => {
    // Mock de generación de ids
    task.id = +tasks[tasks.length - 1].id + 1;
    const newTareas = [...tasks, task];
    store.setTasks(newTareas).then(() => {
      setTasks(newTareas);
    });
  };

  const toggleCompleteTask = ({ id }) => {
    const newTareas = tasks.map((item) => ({
      ...item,
      isCompleted: +item.id === +id ? !item.isCompleted : item.isCompleted,
    }));
    store.setTasks(newTareas).then(() => {
      setTasks(newTareas);
    });
  };

  const deleteTask = ({ id }) => {
    const newTareas = tasks.filter((item) => item.id !== id);
    store.setTasks(newTareas).then(() => {
      setTasks(newTareas);
    });
  };

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
