import React from "react";
import cardBack from "../../assets/snapup_cardback.png";


export default function Deck(props) {
  
  return (
    <img
      className="deck"
      src={cardBack}
      alt="Card Back"
      onClick={() => props.onClick(props.setState, props.socket, props.player)}
      draggable="false"
    />
  );
}
