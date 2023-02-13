import React, { useState, useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import CardPreview from "./CardPreview";
import "../../component-styles/card.css";
import cardBack from "../../assets/snapup_cardback.png";

//turn this into a folder full of components for card modes.
export default function CardShow(props) {
  const [showPreview, setShowPreview] = useState(false);

  const [collected, drag, dragPreview] = useDrag(
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
  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []);

  let canDrag = null;
  // console.log("position of ", props.name, " is ", props.cardPosition);
  if (props.cardPosition === "hand" && props.energy >= props.cost) {
    canDrag = drag;
  }
  if (
    props.cardPosition === "leftCardZone" ||
    props.cardPosition === "middleCardZone" ||
    props.cardPosition === "rightCardZone"
  ) {
    canDrag = drag;
  }

  const cardObj = {
    id: props.id,
    name: props.name,
    cost: props.cost,
    power: props.power,
    img: props.img,
    deck: props.deck,
    description: props.description,
  };

  if (showPreview === true) {
    return (
      <div>
        <div className="card-show-preview-container" ref={null}>
          <CardPreview
            style={{ pointerEvents: "auto" }}
            onContextMenu={() => setShowPreview(false)}
            onClick={() => setShowPreview(false)}
            item={{
              id: cardObj.id,
              name: cardObj.name,
              cost: cardObj.cost,
              power: cardObj.power,
              img: cardObj.img,
              deck: cardObj.deck,
              description: cardObj.description,
            }}
          />
        </div>
        <div
          className={`card-show ${cardObj.deck}`}
          onContextMenu={() => setShowPreview(true)}
        >
          <div
            className="card-main"
            ref={canDrag}
            style={{
              // display: collected.isDragging ? "none" : "initial",
              opacity: collected.isDragging ? "0" : "1",
            }}
          >
            <div className="card-main-header">
              <div className="card-main-name"> {cardObj.name}</div>
              <div className="card-cost-container">
                <div className="card-cost-shape"></div>
                <div className="card-cost">{cardObj.cost}</div>
              </div>
            </div>
            <img className="card-main-img" draggable="false" src={cardObj.img} />
            <div className="card-main-power">{cardObj.power}</div>
          </div>

          <img src={cardBack} alt="Card Back" className="card-back" />
        </div>
      </div>
    );
  } else {
    return (
      //only return card-show

      <div
        className={`card-show ${cardObj.deck}`}
        onContextMenu={() => setShowPreview(true)}
      >
        <div
          onClick={props.onClick}
          className="card-main"
          ref={canDrag}
          style={{
            // display: collected.isDragging ? "none" : "initial",
            opacity: collected.isDragging ? "0" : "1",
          }}
        >
          <div className="card-main-header">
            <div className="card-main-name"> {cardObj.name}</div>
            <div className="card-cost-container">
              <div className="card-cost-shape"></div>
              <div className="card-cost">{cardObj.cost}</div>
            </div>
          </div>
          <img className="card-main-img" draggable="false" src={cardObj.img} />
          <div className="card-main-power">{cardObj.power}</div>
        </div>

        <img
          src={cardBack}
          alt="Card Back"
          className="card-back"
          onClick={props.onClick}
        />
      </div>
    );
  }
}
