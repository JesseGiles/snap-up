import React from "react";
import testCard from "../../assets/test-card.webp";
import CardShow from "./CardShow";

export default function Hand(props) {
  return (
    <div className="hand">
      <CardShow id={1} />

      <CardShow id={2} />

      <CardShow id={3} />
    </div>
  );
}
