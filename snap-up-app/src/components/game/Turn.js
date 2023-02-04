import React from "react";

export default function Turn(props) {
  return (
    <div className="Turn">
      <div className="current-turn">{props.currentTurn}</div>
      <button className onClick={props.onClick}>
        next turn
      </button>
    </div>
  );
}
