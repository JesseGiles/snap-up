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

  // console.log("test our props", props);
  console.log(
    "test our props (playerZone line 17:)",
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

  //  currentTurn={turn} onClick={onClick}

  //   //       <Hand
  //   hand={[
  //     {
  //       name: "test1",
  //       cost: 2,
  //       ability: "something",
  //       power: 2,
  //       img: "img1.jpg",
  //     },
  //     {
  //       name: "test2",
  //       cost: 2,
  //       ability: "something",
  //       power: 2,
  //       img: "img2.jpg",
  //     },
  //     {
  //       name: "test3",
  //       cost: 2,
  //       ability: "something",
  //       power: 2,
  //       img: "img3.jpg",
  //     },
  //   ]}
  // />

  return (
    <div className="player-zone">
      <Turn />

      <Energy />

      <Deck deck={deck} />

      <Hand hand={hand} />
    </div>
  );
}
