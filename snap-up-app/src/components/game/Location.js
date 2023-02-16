import React from "react";

//also import scss file once you style things

export default function Location(props) {

  return <div className={`location fw-bold ${props.location.style}`}>{props.location.name}</div>;
}
