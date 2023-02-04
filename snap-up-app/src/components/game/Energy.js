import React from "react";

export default function Energy(props) {
  // receives energy as a prop
  return (
    <div className="Energy">
      <div className="current-energy">{props.energy}</div>
    </div>
  );
}
