/* eslint-disable react/prop-types */
/* global  ReactDOM */

function Avatar(props) {
  const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;
  const alt = `Avatar de ${props.name}`;

  return (
    <picture className="avatar" data-id={props.id}>
      <h3>{props.name}</h3>
      <img src={src} alt={alt} />
    </picture>
  );

  /* return h("picture", { className: "avatar", "data-id": props.id }, [
    h("h3", null, props.name),
    h("img", { src: src, alt: alt }),
  ]); */
}

const appx = document.querySelector('#avatars-jsx');
ReactDOM.render(
  <div>
    <Avatar id={21} name="Luisa" />
    <Avatar id="22" name="Maria" />
  </div>,
  appx
);
