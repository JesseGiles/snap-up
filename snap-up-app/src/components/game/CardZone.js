import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import CardEmpty from "./CardEmpty.js";
import CardShow from "./CardShow.js";
import { ItemTypes } from "./ItemTypes.js";

export default function CardZone(props) {
  const ref = useRef(null);
  //const cardsInZone = []

  const cardsInZone = props.cardsInZone;

  console.log("cardZone cards:", props.cardsInZone);

  const generateCards = () => {
    let cardsDisplayed = [];
    for (let i = 0; i < 4; i++) {
      console.log("this is card:", i);
      if (cardsInZone.length > 0 && cardsInZone[i]) {
        cardsDisplayed.push(
          <CardShow
            key={cardsInZone[i].name}
            cardName={cardsInZone[i].name}
            cost={cardsInZone[i].cost}
            power={cardsInZone[i].power}
            img={cardsInZone[i].img}
            ability={cardsInZone[i].ability}
          />
        );
      } else {
        cardsDisplayed.push(<CardEmpty />);
      }
    }
    console.log(cardsDisplayed);
    return cardsDisplayed;
  };

  const [{ isOver }, drop] = useDrop(
    // Accept will make sure only these element type can be droppable on this element
    () => ({
      accept: ItemTypes.CARDSHOW,
      drop: () =>
        //add function call for cardshow replaces card empty lowest position
        //dragsource is card obj we are dragging and drop target is the array we are dropping into
        //placeCardOnBattlefield(card, array),
        console.log("you dropped it"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [] //puts vars for function in an array ex. [x, y]
  );

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? "#ffffff" : "#85709d",
      }}
    >
      <div className="card-zone">{generateCards()}</div>
    </div>
  );
}

/* <CardShow
key={card.name}
cardName={card.name}
cost={card.cost}
power={card.power}
img={card.img}
ability={card.ability}
/> */
