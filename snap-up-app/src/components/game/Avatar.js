import React from "react";

export default function Avatar(props) {
  const image = props.avatar;

  return (
    <div className="avatar">
      <img src={image} height="200px" width="200px" />
    </div>
  );
}
