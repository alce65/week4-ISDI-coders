import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { tasksReducer } from '../components/tasks/reducers/taskreducer';
import { TASKS } from '../models/task.data';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, TASKS);
  return (
    <Context.Provider value={{ tasks, dispatch }}>{children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
