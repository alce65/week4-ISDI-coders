import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContextProvider";

export function Task({ item }) {
  const { toggleCompleteTask, deleteTask } = useContext(TasksContext);

  const template = (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        id={`task-is-completed-${item.id}`}
        onChange={() => {
          toggleCompleteTask(item);
        }}
      />
      {item.title} | {item.responsible}
      <span
        role="button"
        tabIndex="-1"
        className="task__delete-button"
        onClick={() => {
          deleteTask(item);
        }}
      >
        🗑
      </span>
    </li>
  );
  return template;
}
