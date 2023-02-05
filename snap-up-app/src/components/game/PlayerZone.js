import React, { useRef } from "react";
import Deck from "./Deck";
import Hand from "./Hand";
import Energy from "./Energy";
import Turn from "./Turn";
//also import scss file once you style things

export default function PlayerZone(props) {
  // receives deck (unused), energy, hand, onClick, player (unused), setState, state, and turn as props

  return (
    <div className="player-zone">
      <Turn
        turn={props.turn}
        onClick={props.onClick}
        state={props.state}
        setState={props.setState}
      />

      <Energy energy={props.energy} />

      <Deck />

      <Hand hand={props.hand} energy={props.energy} />
    </div>
  );
}
