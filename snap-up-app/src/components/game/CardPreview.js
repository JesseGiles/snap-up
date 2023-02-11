import React from "react";
import "../../component-styles/card-preview.css";

export default function CardPreview(props) {
  console.log("CARDPREVIEW PROPS:", props.item);

  const cardObj = {
    id: props.item.id,
    name: props.item.name,
    cost: props.item.cost,
    power: props.item.power,
    img: props.item.img,
    deck: props.item.deck,
    ability: props.item.ability
  };

  return (
    //show view with injected data

    <div
      style={props.style}
      className={`card-preview-container ${cardObj.deck}`}
    >
      <div className="card-preview">
        <div className="card-preview-header">
          <div className="card-preview-name"> {cardObj.name}</div>
          <div className="card-preview-cost-container">
            <div className="card-preview-cost-shape"></div>
            <div className="card-preview-cost">{cardObj.cost}</div>
          </div>
        </div>
        <img className="card-preview-img" src={cardObj.img} />
        <div className="card-preview-ability">
          {cardObj.ability.description}
        </div>
        <div className="card-preview-power">{cardObj.power}</div>
      </div>
    </div>
  );
}
