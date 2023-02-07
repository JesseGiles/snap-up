import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import "../../component-styles/card.css";
import cardBack from "../../assets/snapup_cardback.png";

//turn this into a folder full of components for card modes.
export default function CardShow(props) {
  const [collected, drag] = useDrag(
    () => ({
      type: ItemTypes.CARDSHOW,
      item: { props },
      end: (item, monitor) => {
        monitor.getDropResult();
        console.log("getdropresult: ", monitor.getDropResult());
      },
      collect: (monitor, props) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  let canDragYN = null;
  // console.log("position of ", props.name, " is ", props.cardPosition);
  if (props.cardPosition === "hand" && props.energy >= props.cost) {
    canDragYN = drag;
  }
  if (
    props.cardPosition === "leftCardZone" ||
    props.cardPosition === "middleCardZone" ||
    props.cardPosition === "rightCardZone"
  ) {
    canDragYN = drag;
  }

  const cardObj = {
    id: props.id,
    name: props.name,
    cost: props.cost,
    power: props.power,
    img: props.img,
    deck: props.deck
  };
  
  return (
    //show view with injected data

    <div className={`card-show ${cardObj.deck}`}>
      
      <div
        className="card"
        ref={canDragYN}
        style={{
          display: collected.isDragging ? "none" : "initial",
          // transform: collected.isDragging ? "rotate()" : "rotate(0deg)",
        }}
      >
        <div className="card-header">
          <div className="card-name">
            {" "}
            {cardObj.name}
          </div>
          <div className="card-cost-container">
            <div className="card-cost-shape"></div>
            <div className="card-cost">{cardObj.cost}</div>
          </div>
        </div>
        <img className="card-img" src={cardObj.img} />
        <div className="card-power">{cardObj.power}</div>
      </div>
    </div>
  );
}
