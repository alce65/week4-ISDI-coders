export function Task({ item, toggleCompleteTask, deleteTask }) {
  const template = (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        id={`task-is-completed-${item.id}`}
        onChange={() => {
          toggleCompleteTask(item.id);
        }}
      />
      {item.title} | {item.responsible}
      <span
        role="button"
        tabIndex="-1"
        className="task__delete-button"
        onClick={() => {
          deleteTask(item.id);
        }}
      >
        🗑
      </span>
    </li>
  );
  return template;
}
