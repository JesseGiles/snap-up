import React from "react";
import Deck from "./Deck";
import Hand from "./Hand";
import Energy from "./Energy";
import Turn from "./Turn";
//also import scss file once you style things

export default function PlayerZone(props) {
  const turn = props.turn;
  const hand = props.hand;
  const deck = props.deck;
  const energy = props.energy;
  const onClick = props.onClick;

  console.log('props are:', props);
  console.log(
    "test our props (playerZone line 16:)",
    "/nturn:",
    turn,
    "/nhand:",
    hand,
    "/ndeck:",
    deck,
    "/nenergy:",
    energy,
    "/nonClick:",
    onClick
  );

  return (
    <div className="player-zone">
      <Turn turn={props.turn} onClick={props.onClick} state={props.state} setState={props.setState}/>

      <Energy energy={energy}/>

      <Deck deck={deck} />

      <Hand hand={hand} />
    </div>
  );
}
