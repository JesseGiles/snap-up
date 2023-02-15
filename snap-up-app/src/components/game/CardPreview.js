import React from "react";
import "../../component-styles/card-preview.css";

export default function CardPreview(props) {
  if (props.item === undefined) {
    return;
  }
  const cardObj = {
    id: props.item.id,
    name: props.item.name,
    cost: props.item.cost,
    power: props.item.power,
    img: props.item.img,
    deck: props.item.deck,
    description: props.item.description,
  };

  return (
    //show view with injected data

    <div
      onClick={props.onClick}
      onContextMenu={props.onContextMenu}
      style={props.style}
      className={`card-preview-container ${cardObj.deck}`}
      draggable="false"
    >
      <div className="card-preview">
        <div className="card-preview-header">
          <div className="card-preview-name fw-bold"> {cardObj.name}</div>
          <div className="card-preview-cost-container">
            <div className="card-preview-cost-shape"></div>
            <div className="card-preview-cost">{cardObj.cost}</div>
          </div>
        </div>
        <img className="card-preview-img" src={cardObj.img} draggable="false" />
        <div className="card-preview-ability fw-bold text-center">
          {cardObj.description}
        </div>
        <div className="card-preview-power">{cardObj.power}</div>
      </div>
    </div>
  );
}
