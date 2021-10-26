import { useState, useRef } from "react";

export function GreetingsRef() {
  const [state, setState] = useState("");
  const refName = useRef();

  const handleDelete = () => {
    setState("");
    refName.current.value = "";
  };

  const handleChange = () => {
    setState(refName.current.value);
  };

  const template = (
    <div>
      <input
        type="text"
        placeholder="Dime tu nombre"
        ref={refName}
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
