import React from "react";
import { useDrop } from "react-dnd";
import CardShow from "./CardShow.js";
import { ItemTypes } from "./ItemTypes.js";
import "../../component-styles/flip-transition.css";

export default function CardZone(props) {
  
  const generateCards = () => {
    let cardsInZone = props.cardsInZone;
    let cardsDisplayed = [];
    for (let i = 0; i < 4; i++) {
      if (cardsInZone.length > 0 && cardsInZone[i]) {
        
        cardsDisplayed.push(
          <div key={i}>
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
                locationBonus={cardsInZone[i].locationBonus}
              />
          </div>
        );
      }
    }
    return cardsDisplayed;
  };

  const [collected, drop] = useDrop(
    // Accept will make sure only these element type can be droppable on this element
    () => ({
      accept: ItemTypes.CARDSHOW,
      drop: (item, monitor) => {
        props.moveCardBetween(
          item.props,
          item.props.cardPosition,
          props.position
        );

        // props.cardsInZone.push(item.props)
      },
      collect: (monitor, props) => ({
        isOver: monitor.isOver(),
        getItem: monitor.getItem(),
      }),
    }),
    [props.moveCardBetween]
  );

  return (
    <div
      className="drop-card-zone"
      ref={drop}
      style={{
        backgroundColor: collected.isOver
          ? "rgba(255, 255, 255, 0.2)"
          : "initial"

            
      }}
    >
      <div className="card-zone">{generateCards()}</div>
    </div>
  );
}
