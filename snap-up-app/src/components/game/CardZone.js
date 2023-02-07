import React, { useRef, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import CardEmpty from "./CardEmpty.js";
import CardShow from "./CardShow.js";
import { ItemTypes } from "./ItemTypes.js";

import useGameData from "../../hooks/useGameData.js";

export default function CardZone(props) {
  const ref = useRef(null);
  console.log("top of cardzone props.hand: ", props.hand);

  //const [cardsInZone, setCardsInZone] = useState([]);

  //const cardsInZone = []
  // console.log("this is state before:", state);
  //console.log("props in cardZone:", props);
  //console.log("props.energy is:", props.energy);

  const generateCards = () => {
    let cardsInZone = props.cardsInZone;
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
        backgroundColor: collected.isOver ? "#ffffff" : "#A25664",
      }}
    >
      <div className="card-zone">{generateCards()}</div>
    </div>
  );
}
