import React from "react";
import Deck from "./Deck";
import Hand from "./Hand";
import Energy from "./Energy";
import Turn from "./Turn";


export default function PlayerZone(props) {


  return (
    <div className="player-zone">

      <div className="turn-energy-container">
        <Turn turn={props.turn} />
        <Energy energy={props.energy} />
      </div>

      <Deck
        player={props.player}
        onClick={props.onClick}
        state={props.state}
        setState={props.setState}
        socket={props.socket}
      />

      <Hand
        hand={props.hand}
        energy={props.energy}
        moveCardBetween={props.moveCardBetween}
      />
    </div>
  );
}
