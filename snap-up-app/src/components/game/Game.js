import React, { useState, useRef } from "react";
import "../../component-styles/game.css";
import Lane from "./Lane";
import PlayerZone from "./PlayerZone";
import useGameData from "../../hooks/useGameData";

function Game() {
  const { state, setState } = useGameData();

  console.log("Put in a db query here");

  return (
    <div className="game">
      <div className="opp-pz">
        <PlayerZone player="p2-opp" />
      </div>
      <div className="battlefield">
        <Lane position="left" />
        <Lane position="mid" />
        <Lane position="right" />
      </div>
      <PlayerZone
        player="p1-self"
        hand={state.hand}
        deck={state.deck}
        turn={state.turn}
        energy={state.energy}
        onClick={setState}
      />
    </div>
  );
}

export default Game;

// setState((prev) => ({
//   ...prev,
//   days: all[0].data,
