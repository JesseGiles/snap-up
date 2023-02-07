import React, { useEffect, useState } from "react";
import CardZone from "./CardZone";
import Location from "./Location";
import PlayerLanePower from "./PlayerLanePower";
import OppCardZone from "./OppCardZone";
//also import scss file once you style things

export default function Lane(props) {
  //console.log("lane droppedcards:", droppedCards);
  const addUpPower = (array) => {
    let droppedCards = array;
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
      <OppCardZone position={props.position} cardsInZone={props.oppZoneCards} />
      <PlayerLanePower totalPower={addUpPower(props.oppZoneCards)} />
      <Location />
      <PlayerLanePower
        player="p1-self"
        totalPower={addUpPower(props.playerZoneCards)}
      />
      <CardZone
        player="p1-self"
        moveCardBetween={props.moveCardBetween}
        cardsInZone={props.playerZoneCards}
        energy={props.energy}
        position={props.position}
        hand={props.hand}
      />
    </div>
  );
}
