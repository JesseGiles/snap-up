import React from "react";
import "../../component-styles/card.css";

//turn this into a folder full of components for card modes.
export default function CardShow(props) {
  console.log("this is props.id", props.id);
  let cardName;
  let cost;
  let power;
  let img;

  const cardObj = props.cardInfo;

  // if (props.id == 1) {
  //   cardName = "Dragonsheen";
  //   cost = "1";
  //   power = "3";
  //   img = "/cardImages/dragonsheen.jpeg";
  // } else if (props.id == 2) {
  //   cardName = "Sailor Jupiter";
  //   cost = "2";
  //   power = "5";
  //   img = "/cardImages/jupiter.jpeg";
  // } else {
  //   cardName = "Jason";
  //   cost = "3";
  //   power = "7";
  //   img = "/cardImages/jason.jpeg";
  // }

  return (
    //show view with injected data
    <div className="card-show">
      <div className="card">
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
