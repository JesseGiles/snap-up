import React from "react";
import Card from "./Card";


export default function CardZone(props) {
  
  return (
    <div className="card-zone" onDragOver={(e) => e.preventDefault()}>
      <div className="card-zone-top">
        <Card 
        position="1"
        />
        <Card 
        position="2"
        />
      </div>
      <div className="card-zone-bottom">
        <Card 
        position="3"
        />
        <Card 
        position="4"
        />
      </div>
    </div>
  );
}
