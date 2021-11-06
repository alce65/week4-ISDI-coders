import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { List } from './list';

jest.mock('../../../hooks/finalTasks', () => ({
  useFinalTasks: () => ({
    tasks: [
      {
        id: 1,
        title: 'Tarea importante',
        responsible: 'Pepe',
        isCompleted: true,
      },
    ],
    loadTasks: jest.fn(),
  }),
}));

test('renders List', () => {
  render(
    <Router>
      <List />
    </Router>
  );
  // eslint-disable-next-line no-undef
  expect(screen.getByText(/Tarea importante/i)).toBeInTheDocument();
});
