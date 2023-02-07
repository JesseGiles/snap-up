import React from "react";
import CardEmpty from "./CardEmpty.js";
import CardShow from "./CardShow.js";

export default function OppCardZone(props) {
  let oppCards = props.cardsInZone;

  const generateCards = () => {
    let cardsInZone = oppCards;
    console.log("this is prop position:", props.position);
    let cardsDisplayed = [];
    for (let i = 0; i < 4; i++) {
      if (cardsInZone.length > 0 && cardsInZone[i]) {
        cardsDisplayed.push(
          <CardShow
            key={i}
            id={cardsInZone[i].id}
            name={cardsInZone[i].name}
            cost={cardsInZone[i].cost}
            power={cardsInZone[i].power}
            img={cardsInZone[i].img}
            ability={cardsInZone[i].ability}
            cardPosition={cardsInZone[i].cardPosition}
            deck={cardsInZone[i].deck}
          />
        );
      } else {
        cardsDisplayed.push(<CardEmpty key={i} />);
      }
    }
    return cardsDisplayed;
  };
  return (
    <div className="opp-card-zone">
      <div className="card-zone">{generateCards()}</div>
    </div>
  );
}
