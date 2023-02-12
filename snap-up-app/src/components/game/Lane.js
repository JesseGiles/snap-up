import React, { useEffect, useState } from "react";
import CardZone from "./CardZone";
import Location from "./Location";
import PlayerLanePower from "./PlayerLanePower";
import OppCardZone from "./OppCardZone";
import { addUpPower } from "../../helpers/selectors";

//also import scss file once you style things

export default function Lane(props) {

  return (
    <div className={`lane ${props.location.deck}`}>
      <OppCardZone position={props.position} cardsInZone={props.oppZoneCards} />
      <PlayerLanePower totalPower={addUpPower(props.oppZoneCards)} />
      <Location location={props.location} />
      <PlayerLanePower totalPower={addUpPower(props.playerZoneCards)} />
      <CardZone
        moveCardBetween={props.moveCardBetween}
        cardsInZone={props.playerZoneCards}
        energy={props.energy}
        position={props.position}
        hand={props.hand}
      />
    </div>
  );
}
