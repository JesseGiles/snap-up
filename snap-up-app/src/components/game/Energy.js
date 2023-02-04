import React from "react";

export default function Energy(props) {
  return (
    <div className="Energy">
      <div className="current-energy">{props.energy}</div>
    </div>
  );
}
