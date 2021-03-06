import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContextProvider';
import { ReduxContext } from '../../contexts/ReduxContextProvider';

import { Menu } from './menu';
import { useFinalTasks } from '../../hooks/finalTasks';

export function Header() {
  const { pendingTasks } = useContext(TasksContext);
  const pendingTasks2 = useContext(ReduxContext).pendingTasks;
  // const pendingTasks3 = useContext(FinalReduxContext).pendingTasks;
  const pendingTasks3 = useFinalTasks().pendingTasks;
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'Tareas' },
    { path: '/gent', label: 'Gentelman' },
    { path: '/about', label: 'Nosotros' },
  ];
  const pathLogo = '/assets/isdi_coders.png';
  const altLogo = 'Logo de ISDI Coders';

  // const pendingTasks = tasks.filter((item) => !item.isCompleted).length;
  /* useEffect(() => {
    pendingTasks = tasks.filter((item) => !item.isCompleted).length;
  }, [tasks]); */

  const template = (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={pathLogo} alt={altLogo} />
      </div>
      <div className="header__main">
        <h1 className="header__title">Tareas Dashboard v.2.0</h1>
        <span>
          {pendingTasks()} - {pendingTasks2()} - {pendingTasks3()}
        </span>
        <Menu menuItems={menuItems} />
      </div>
    </header>
  );
  return template;
}

/* export default class Header extends Component {
  constructor(selector = "") {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: "index.html", label: "Tareas" },
      { path: "about.html", label: "Nosotros" },
    ];
    this.menu = new Menu(this.menuItems).createTemplate();
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }

  #createRender() {
    const template = `
      <div class="header__logo">
        <img
          class="header__logo-image"
          src="./assets/isdi_coders.png"
          alt="logo"
        />
      </div>
      <div class="header__main">
        <h1 class="header__title">Tareas Dashboard</h1>
        ${this.menu}
      </div>
      `;
    return template;
  }
} */
