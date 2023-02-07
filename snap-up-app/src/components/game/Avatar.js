import React from "react";

export default function Avatar(props) {
  const image = props.avatar;
  console.log("avatar image: ", props);

  return (
    <div className="avatar">
      <img src={image} height="200px" width="200px" />
    </div>
  );
}
