import React from "react";
import cardBack from "../../assets/empty_card_frame.png";
import dragonsheen from "../../assets/dragonsheen.jpeg";
import jupiter from "../../assets/jupiter.jpeg";
import jason from "../../assets/jason.jpeg";
import "../../component-styles/card.css";

//turn this into a folder full of components for card modes.
export default function Card(props) {
  return (
    //show view with injected data
    <div className="card-show">
      <div className="card">
        <div className="card-header">
          <div className="card-name"> {">"}Jason</div>
          <div className="card-cost-container">
            <div className="card-cost-shape"></div>
            <div className="card-cost">3</div>
          </div>
        </div>
        <img className="card-img" src={jason} />
        <div className="card-power">7</div>
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
