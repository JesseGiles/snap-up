import React from "react";
import CardZone from "./CardZone";
import Location from "./Location";
import PlayerLanePower from "./PlayerLanePower";
//also import scss file once you style things

export default function Lane(props) {
  
  return (
    <div className="Lane">
      <CardZone
      player="p2-opp"
      />
      <PlayerLanePower
      player="p2-opp"
      />
      <Location />
      <PlayerLanePower
      player="p1-self"
      />
      <CardZone
      player="p1-self"
      />
    </div>
  );
}