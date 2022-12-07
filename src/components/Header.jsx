import React from "react";

export default function Header(props) {
  return (
    <div className="Header">
      <img src={`./src/assets/${props.img}`} />
      <p>{props.title}</p>
    </div>
  );
}
