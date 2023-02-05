import React from "react";
import CardShow from "./CardShow";

export default function Hand(props) {
  // receives the hand array as a prop, which contains cards

  const handToShow = props.hand;
  const energy = props.energy;

  // map through the hand array (saved in handToShow) and display each card as an item
  const currentHand = handToShow.map((card) => (
    <CardShow
      key={card.id}
      id={card.id}
      cardName={card.name}
      cost={card.cost}
      power={card.power}
      img={card.img}
      ability={card.ability}
      energy={energy}
    />
  ));
  // returns all the card components wrapped in a hand div component
  return <div className="hand">{currentHand}</div>;
}
