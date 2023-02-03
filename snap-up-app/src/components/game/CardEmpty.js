import React from "react";
import cardBack from "../../assets/empty_card_frame.png";

//turn this into a folder full of components for card modes.
export default function CardEmpty(props) {
  return (
    <img className="card-empty" mode="EMPTY" src={cardBack} alt="Card Back" />
  );
}
