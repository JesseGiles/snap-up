import React from "react";

export default function Turn(props) {
  // receives onClick, setState, state, turn as props

  return (
    <div className="Turn">
      <div className="current-turn">turn {props.turn}</div>
    </div>
  );
}
