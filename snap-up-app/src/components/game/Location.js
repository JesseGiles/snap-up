import React from "react";

//also import scss file once you style things

export default function Location(props) {

  return <div className={`location ${props.location.style}`}>{props.location.name}</div>;
}
