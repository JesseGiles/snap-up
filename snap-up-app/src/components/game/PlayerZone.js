import React from "react";
import Deck from "./Deck";
import Hand from "./Hand";
import Energy from "./Energy";
import Turn from "./Turn";
//also import scss file once you style things

export default function PlayerZone(props) {
  const { turn, hand, deck, energy, onClick } = props;

  console.log("test our props", turn, hand, deck, energy);

  return (
    <div className="player-zone">
      <Turn currentTurn={turn} onClick={onClick} />

      <Energy />

      <Deck />

      <Hand />
    </div>
  );
}
