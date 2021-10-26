import { useState } from 'react';
import Gentleman from './Gentelman';
import './gentlist.css';
import { GENT } from './models/gent.data';

export default function GentList() {
  const [gentState, setGentState] = useState({
    list: GENT,
    countSelected: GENT.filter((item) => item.selected).length,
  });

  const selectGent = (id) => {
    console.log('selected', id);
    // eslint-disable-next-line no-debugger
    // debugger;
    setGentState((prev) => {
      const newList = prev.list.map((item) => ({
        ...item,
        selected: +item.id === +id ? !item.selected : item.selected,
      }));
      const result = {
        list: newList,
        countSelected: newList.filter((item) => item.selected).length,
      };
      return result;
    });
    console.log(gentState);
  };
  const deleteGent = (id) => {
    setGentState((prev) => {
      const newList = prev.list.filter((item) => item.id !== id);
      return {
        list: newList,
        countSelected: newList.filter((item) => item.selected).length,
      };
    });
  };

  const listItems = gentState.list.map((item) => (
    <Gentleman
      key={item.id}
      data={item}
      handleDelete={deleteGent}
      handleSelect={selectGent}
    />
  ));
  const template = (
    <div className="gent-container">
      <header className="gent-main-header">
        <h1 className="gent-main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          <span>{gentState.countSelected}</span>
          <span> </span>
          <span>gentlemen pointing at you</span>
        </p>
        <button type="button" className="button button--select">
          Select all
        </button>
      </section>
      <main className="gent-main">
        <ul>{listItems}</ul>
      </main>
    </div>
  );
  return template;
}
