import React from "react";
import "../../component-styles/card-preview.css";

export default function CardPreview(props) {
  const cardObj = {
    id: props.id,
    name: props.name,
    cost: props.cost,
    power: props.power,
    img: props.img,
    deck: props.deck,
    ability: props.ability,
  };

  return (
    //show view with injected data

    <div className={`card-preview-container ${cardObj.deck}`}>
      <div className="card-preview">
        <div className="card-preview-header">
          <div className="card-preview-name"> {cardObj.name}</div>
          <div className="card-preview-cost-container">
            <div className="card-preview-cost-shape"></div>
            <div className="card-preview-cost">{cardObj.cost}</div>
          </div>
        </div>
        <img className="card-preview-img" src={cardObj.img} />
        <div className="card-preview-ability">{cardObj.ability}</div>
        <div className="card-preview-power">{cardObj.power}</div>
      </div>
    </div>
  );
}
