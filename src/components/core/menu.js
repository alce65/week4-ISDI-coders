export function Menu({ menuItems }) {
  const listItems = menuItems.map((item) => (
    <li>
      <a className="header-menu__item" href={item.path}>
        {item.label}
      </a>
    </li>
  ));

  const template = (
    <nav>
      <ul className="header-menu">{listItems}</ul>
    </nav>
  );
  return template;
}

/* export default class Menu extends Component {
  constructor(menuItems) {
    super();
    this.menuItems = menuItems;
    this.template = this.createTemplate();
  }

  createTemplate() {
    let menu = '<nav><ul class="header-menu">';
    this.menuItems.forEach((item) => {
      menu += `<li><a class= "header-menu__item"
    href="${item.path}">${item.label}</a></li>`;
    });
    menu += "</ul></nav>";
    return menu;
  }
} */
