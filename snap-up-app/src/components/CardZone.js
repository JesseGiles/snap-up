import React from "react";
import CardEmpty from "./CardEmpty.js";


export default function CardZone(props) {
  
  return (
    <div className="card-zone" onDragOver={(e) => e.preventDefault()}>
      <div className="card-zone-top">
        <CardEmpty 
        position="1"
        />
        <CardEmpty 
        position="2"
        />
      </div>
      <div className="card-zone-bottom">
        <CardEmpty 
        position="3"
        />
        <CardEmpty 
        position="4"
        />
      </div>
    </div>
  );
}
