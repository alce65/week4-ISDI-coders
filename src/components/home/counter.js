import { useState } from 'react';
import './counter.css';

export function Counter() {
  /* const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0); */

  const [state, setState] = useState({
    counter: 0,
    clicks: 0,
  });

  const handleChange = (increment) => {
    if (increment === 0) {
      setState({
        counter: state.counter * increment,
        clicks: state.clicks + 1,
      });
    } else {
      setState({
        counter: state.counter + increment,
        clicks: state.clicks + 1,
      });
    }
  };

  const template = (
    <>
      <div className="counter__h3">{state.counter}</div>
      <div className="counter-buttons">
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(+1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(-1)}
        >
          -
        </button>
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(0)}
        >
          Reset
        </button>
      </div>
      <div className="counter__h3">Clicks: {state.clicks}</div>
    </>
  );
  return template;
}
