import React from "react";

export default function PlayerLanePower(props) {
  const totalPower = props.totalPower;
  const winning = props.isOppWinningLane;

  return (
    <div
      className="player-lane-power"
      style={{
        backgroundColor: winning ? "chartreuse" : "goldenrod",
      }}
    >
      <div>{totalPower}</div>
    </div>
  );
}