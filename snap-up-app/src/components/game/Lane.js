import React from "react";
import CardZone from "./CardZone";
import Location from "./Location";
import PlayerLanePower from "./PlayerLanePower";
//also import scss file once you style things

export default function Lane(props) {
  let droppedCards = props.droppedCards;
  console.log("lane droppedcards:", droppedCards);
  const addUpPower = (droppedCards) => {
    let totalPower = 0;
    for (let i = 0; i < 4; i++) {
      if (droppedCards.length > 0 && droppedCards[i]) {
        totalPower += droppedCards[i].power;
      }
    }

    return totalPower;
  };

  return (
    <div className="lane">
      {/* <CardZone player="p2-opp" />
      <PlayerLanePower player="p2-opp" /> */}
      <Location />
      <PlayerLanePower player="p1-self" totalPower={addUpPower(droppedCards)} />
      <CardZone player="p1-self" cardsInZone={droppedCards} />
    </div>
  );
}
