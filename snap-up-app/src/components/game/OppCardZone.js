import React, { useState, useEffect } from "react";
import CardShow from "./CardShow.js";
import "../../component-styles/flip-transition.css";
import { CSSTransition } from "react-transition-group";

export default function OppCardZone(props) {

  let oppCards = props.cardsInZone;

  const generateCards = () => {
    let cardsInZone = oppCards;
    let cardsDisplayed = [];
    for (let i = 0; i < 4; i++) {
      
      if (cardsInZone.length > 0 && cardsInZone[i]) {
        cardsDisplayed.push(
          <div key={i}>
            {/* <CSSTransition in={showFront} timeout={300} classNames="flip"> */}
          <CardShow
            key={cardsInZone[i].id}
            id={cardsInZone[i].id}
            name={cardsInZone[i].name}
            cost={cardsInZone[i].cost}
            power={cardsInZone[i].power}
            img={cardsInZone[i].img}
            ability={cardsInZone[i].ability}
            description={cardsInZone[i].description}
            cardPosition={cardsInZone[i].cardPosition}
            deck={cardsInZone[i].deck}
            showBack={true}
            
            
          />
          {/* </CSSTransition> */}
          </div>  
        );
      } else {
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
