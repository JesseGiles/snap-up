import React from "react";

export default function Turn(props) {
  console.log("turn.js line 4:", props)

  return (
    <div className="Turn">
      <div className="current-turn">{props.turn}</div>
      <button className onClick={() => props.onClick(props.state, props.setState)}>
        next turn
      </button>
    </div>
  )
};
