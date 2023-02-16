import React, { useState, useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { CSSTransition } from "react-transition-group";
import CardPreview from "./CardPreview";
import "../../component-styles/card.css";
import cardBack from "../../assets/snapup_cardback.png";

//turn this into a folder full of components for card modes.
export default function CardShow(props) {
  const [showPreview, setShowPreview] = useState(false);
  const [showBack, setShowBack] = useState(false)
  const [showFront, setShowFront] = useState(false)
  
  useEffect(() => {
    if (props.showBack === true) {
      
      setShowFront(false)
      setTimeout( () => {
        setShowFront(true)
        console.log('set show front should be true:', showFront)
      }
        ,1500)
      
    }
  }, [props.playerAbilityQueue]);
  

  const [collected, drag, dragPreview] = useDrag(
    () => ({
      type: ItemTypes.CARDSHOW,
      item: { props },
      end: (item, monitor) => {
        monitor.getDropResult();
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
  
  useEffect(() => {
    if (props.showBack === true){
      setShowBack(true)
    }  
  }, []);



  let canDrag = null;
  
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
            onContextMenu={() => {setShowPreview(false)
            setShowBack(false)}}
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
          className={`card-show ${cardObj.deck} `}
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
              <div className="card-main-name fw-semibold"> {cardObj.name}</div>
              <div className="card-cost-container">
                <div className="card-cost-shape"></div>
                <div className="card-cost">{cardObj.cost}</div>
              </div>
            </div>
            <img
              className="card-main-img"
              draggable="false"
              src={cardObj.img}
            />
            <div className="card-main-power">{cardObj.power}</div>
          </div>

          <img src={cardBack} alt="Card Back" className="card-back" />
        </div>
      </div>
    );
  } else {
    return (
      //only return card-show
      <CSSTransition in={showFront} timeout={300} classNames="flip">
      <div
        className={`card-show ${cardObj.deck}`}
        onContextMenu={() => setShowPreview(true)}
        style={{
          transform: showBack ? "rotateY(180deg)" : "transform: rotateY(0deg)",
        }}
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
      </CSSTransition>
    );
  }
}
