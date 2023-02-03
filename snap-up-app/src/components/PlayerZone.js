import React from "react";
import Deck from "./Deck";
import Hand from "./Hand";
//also import scss file once you style things

export default function CardZone(props) {
  
  return (
    <div className="PlayerZone">
      <Deck />

      <Hand />
     
    </div>
  );
}