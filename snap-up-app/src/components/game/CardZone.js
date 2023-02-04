import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import CardEmpty from "./CardEmpty.js";
import { ItemTypes } from "./ItemTypes.js";

export default function CardZone(props) {
  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop(
    // Accept will make sure only these element type can be droppable on this element
    () => ({
      accept: ItemTypes.CARDSHOW,
      drop: () =>
        //add function call for cardshow replaces card empty lowest position
        console.log("you dropped it"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [] //puts vars for function in an array ex. [x, y]
  );

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? "#ffffff" : "#85709d",
      }}
    >
      <div className="card-zone">
        <div className="card-zone-top">
          <CardEmpty position="1" />
          <CardEmpty position="2" />
        </div>
        <div className="card-zone-bottom">
          <CardEmpty position="3" />
          <CardEmpty position="4" />
        </div>
      </div>
    </div>
  );
}
