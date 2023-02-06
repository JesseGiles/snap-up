import React from "react";
import CardShow from "./CardShow";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";

export default function Hand(props) {
  // receives the hand array as a prop, which contains cards

  const [collected, drop] = useDrop(
    // Accept will make sure only these element type can be droppable on this element
    () => ({
      accept: ItemTypes.CARDSHOW,
      drop: (item, monitor) => {
        console.log("the position:", item.props.cardPosition);
        props.moveCardBetween(item.props, item.props.cardPosition, "hand");
        // props.cardsInZone.push(item.props)
      },
      collect: (monitor, props) => ({
        isOver: monitor.isOver(),
        getItem: monitor.getItem(),
      }),
    }),
    [props.moveCardBetween]
  );

  const handToShow = props.hand;
  const energy = props.energy;

  // map through the hand array (saved in handToShow) and display each card as an item
  const currentHand = handToShow.map((card) => (
    <CardShow
      key={card.id}
      id={card.id}
      name={card.name}
      cost={card.cost}
      power={card.power}
      img={card.img}
      ability={card.ability}
      cardPosition={card.cardPosition}
      energy={energy}
    />
  ));
  // returns all the card components wrapped in a hand div component
  return (
    <div
      className="drop-hand"
      ref={drop}
      style={{
        backgroundColor: collected.isOver ? "#ffffff" : "initial",
      }}
    >
      <div className="hand">{currentHand}</div>
    </div>
  );
}
