import React, { useState, useEffect } from "react";
import "../../component-styles/game.css";
import Lane from "./Lane";
import PlayerZone from "./PlayerZone";
import useGameData from "../../hooks/useGameData";
import getInitialHand from "../../helpers/selectors";

function Game() {
  const { state, setState } = useGameData();

  useEffect(() => {
    console.log("game line 12: useEffect is running...");
    getInitialHand(state, setState);
  }, []);
  console.log("game line 15 state is:", state);

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
