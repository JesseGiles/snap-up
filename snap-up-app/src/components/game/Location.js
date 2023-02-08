import React from "react";

//also import scss file once you style things

export default function Location(props) {
  const displayLocation = () => {
    let newLocation;
    if (props.location.name) {
      newLocation = <div className="location">{props.location.name}</div>;
    } else {
      newLocation = <div className="location">TBD</div>;
    }
    return newLocation;
  };

  return <div>{displayLocation()}</div>;
}
