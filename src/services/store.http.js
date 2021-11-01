const baseURL = 'http://localhost:3800';
const storeURL = `${baseURL}/tasks`;

export function getTasks() {
  return fetch(storeURL).then((resp) => resp.json());
}

export function setTask(task) {
  return fetch(storeURL, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => resp.json());
}

export function updateTask(task) {
  return fetch(`${storeURL}/${task.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ isCompleted: !task.isCompleted }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => resp.json());
}

export function removeTask(id) {
  return fetch(`${storeURL}/${id}`, { method: 'DELETE' });
}
