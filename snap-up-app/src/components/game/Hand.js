import React from "react";
import testCard from "../../assets/test-card.webp";
import CardShow from "./CardShow";
const {
  abilities,
  sailorMoonDeck,
} = require("../../db/DeckFiles/sailorMoonDeck");

export default function Hand(props) {
  console.log("props in Hand.js line 10 are:", props);

  const handtoshow = props.hand;

  const currentHand = handtoshow.map((card) => (
    <CardShow
      cardName={card.name}
      cost={card.cost}
      power={card.power}
      img={card.img}
      ability={card.ability}
    />
  ));
  // name, cost, power, img, ability;
  return <div className="hand">{currentHand}</div>;
}
