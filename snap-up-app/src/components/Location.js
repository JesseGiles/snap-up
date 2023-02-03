import React from "react";
import location from "../assets/location_template.webp"
//also import scss file once you style things

export default function Location(props) {
  
  return (
    
    <img 
    className="Location"
    src={location}
    alt="location"
    />
  );
}