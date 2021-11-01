/* global  React, ReactDOM */

const h = React.createElement;

function Avatar(props) {
  const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;
  const alt = `Avatar de ${props.name}`;

  /* <picture class="avatar" data-id="${id}"  >
    <h3>${name}</h3>
    <img src="${src}" alt=""
  </picture> */
  return h('picture', { className: 'avatar', 'data-id': props.id }, [
    h('h3', null, props.name),
    h('img', { src, alt }),
  ]);
}
const app = document.querySelector('#avatars');
ReactDOM.render(
  h('div', null, [
    h(Avatar, { id: 11, name: 'Pepa' }),
    h(Avatar, { id: 12, name: 'Elvira' }),
  ]),
  app
);
