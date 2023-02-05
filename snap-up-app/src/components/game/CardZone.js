import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import CardEmpty from "./CardEmpty.js";
import CardShow from "./CardShow.js";
import { ItemTypes } from "./ItemTypes.js";
import { placeCardOnBattlefield } from "../../helpers/selectors.js";

export default function CardZone(props) {
  const ref = useRef(null);
  //const cardsInZone = []

  const cardsInZone = props.cardsInZone;
  console.log("props in cardZone:", props);

  const generateCards = () => {
    let cardsDisplayed = [];
    for (let i = 0; i < 4; i++) {
      if (cardsInZone.length > 0 && cardsInZone[i]) {
        cardsDisplayed.push(
          <CardShow
            key={cardsInZone[i].id}
            id={cardsInZone[i].id}
            cardName={cardsInZone[i].cardName}
            cost={cardsInZone[i].cost}
            power={cardsInZone[i].power}
            img={cardsInZone[i].img}
            ability={cardsInZone[i].ability}
          />
        );
      } else {
        cardsDisplayed.push(
          <CardEmpty key={Math.floor(Math.random() * 9000)} />
        );
      }
    }
    //console.log("cards displayed array: ", cardsDisplayed);
    return cardsDisplayed;
  };

  const [collected, drop] = useDrop(
    // Accept will make sure only these element type can be droppable on this element
    () => ({
      accept: ItemTypes.CARDSHOW,
      drop: (item, monitor) =>
        //dragsource is card obj we are dragging and drop target is the array we are dropping into
        placeCardOnBattlefield(item.props, cardsInZone),
      // console.log("item is:", item.props),
      collect: (monitor, props) => ({
        isOver: monitor.isOver(),
        getItem: monitor.getItem(),
      }),
    }),
    [] //puts vars for function in an array ex. [x, y]
  );

  //console.log("getItem:", collected.getItem);
  // console.log("collected:", collected);

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: collected.isOver ? "#ffffff" : "#85709d",
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
