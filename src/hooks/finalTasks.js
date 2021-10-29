// Ejemplo de Custom Hook

import { useReducer } from "react";

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
  useReducer();

  function get() {}
  function add() {}
  function update() {}
  function remove() {}

  return {
    get,
    add,
    update,
    remove,
  };
}
