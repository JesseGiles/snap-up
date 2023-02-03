import React from "react";
import testCard from "../../assets/test-card.webp";
import CardShow from "./CardShow";
const {
  abilities,
  sailorMoonDeck,
} = require("../../db/DeckFiles/sailorMoonDeck");

export default function Hand(props) {
  const cards = sailorMoonDeck.cards;

  return (
    <div className="hand">
      <CardShow cardInfo={cards[0]} />

      <CardShow cardInfo={cards[1]} />

      <CardShow cardInfo={cards[2]} />
    </div>
  );
}
