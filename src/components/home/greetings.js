import { useState, use } from "react";

export function Greetings() {
  const [state, setState] = useState("");

  const handleDelete = () => {
    setState("");
  };

  const handleChange = (ev) => {
    setState(ev.target.value);
  };

  const template = (
    <div>
      <input
        type="text"
        placeholder="Dime tu nombre"
        value={state}
        onChange={handleChange}
      />
      <button type="button" onClick={handleDelete}>
        Borrar
      </button>
      <p>Hola {state ? state : "amigo"}</p>
    </div>
  );
  return template;
}
