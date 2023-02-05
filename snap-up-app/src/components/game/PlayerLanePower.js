import React from "react";

export default function PlayerLanePower(props) {
  const totalPower = props.totalPower;

  return (
    <div className="player-lane-power">
      <h2>{totalPower}</h2>
    </div>
  );
}
