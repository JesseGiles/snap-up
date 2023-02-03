import React from "react";
import cardBack from "../../assets/empty_card_frame.png";
import dragonsheen from "../../assets/dragonsheen.jpeg";
import jupiter from "../../assets/jupiter.jpeg";
import jason from "../../assets/jason.jpeg";
import "../../component-styles/card.css";

//turn this into a folder full of components for card modes.
export default function CardShow(props) {
  console.log("this is props.id", props.id);
  let cardName;
  let cost;
  let power;
  let img;

  const cardID = props.id;
  if (props.id == 1) {
    cardName = "Dragonsheen";
    cost = "1";
    power = "3";
    img = dragonsheen;
  } else if (props.id == 2) {
    cardName = "Sailor Jupiter";
    cost = "2";
    power = "5";
    img = jupiter;
  } else {
    cardName = "Jason";
    cost = "3";
    power = "7";
    img = jason;
  }

  return (
    //show view with injected data
    <div className="card-show">
      <div className="card">
        <div className="card-header">
          <div className="card-name">
            {">"}
            {cardName}
          </div>
          <div className="card-cost-container">
            <div className="card-cost-shape"></div>
            <div className="card-cost">{cost}</div>
          </div>
        </div>
        <img className="card-img" src={img} />
        <div className="card-power">{power}</div>
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
