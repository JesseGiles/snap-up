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
      collect: (monitor, props) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const cardObj = {
    name: props.cardName,
    cost: props.cost,
    power: props.power,
    img: props.img,
  };

  return (
    //show view with injected data
    <div className="card-show">
      {/*<DragPreviewImage connect={preview} src={cardBack} />*/}
      <div
        className="card"
        ref={drag}
        style={{
          transform: collected.isDragging ? "rotate(-7deg)" : "rotate(0deg)",
        }}
      >
        <div className="card-header">
          <div className="card-name">
            {">"}
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

    //empty view
    // <img
    // className="Card-empty"
    // mode="EMPTY"
    // src={cardBack}
    // alt="Card Back"
    // />
  );
}
