import React from "react";

export default function Container(props) {
  let Visited;
  if (props.Data.visited === true) {
    Visited = "YES";
  } else {
    Visited = "NO";
  }
  return (
    <div className="Journal">
      <img src={`./src/assets/${props.Data.CoverImg}`} />
      <div className="Journal-Content">
        <div className="Loc">
          <img src={`./src/assets/${props.Data.LocImg}`} />
          <p>{props.Data.location}</p>
          <span>{props.Data.map}</span>
        </div>
        <h3>{props.Data.city}</h3>
        <p>
          <b>{props.Data.date}</b>
        </p>
        <p>{props.Data.description}</p>
        <p>VISITED:{Visited}</p>
      </div>
    </div>
  );
}
