import { useContext } from "react";
import { FinalReduxContext } from "../../../contexts/FinalReduxContextProvider";

export function Task({ item }) {
  const { toggleCompleteTask, deleteTask } = useContext(FinalReduxContext);

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
