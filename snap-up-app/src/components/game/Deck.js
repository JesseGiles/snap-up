import React from "react";
import cardBack from "../../assets/snapup_cardback.png";

//placeholder for layout purposes
export default function Deck(props) {
  // currently receives no props (it's just showing the back of a card to represent the deck)
  return (
    <img
      className="deck"
      src={cardBack}
      alt="Card Back"
      onClick={() => props.onClick(props.setState, props.socket, props.player)}
    />
  );
}
