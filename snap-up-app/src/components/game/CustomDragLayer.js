import React from "react";
import { useDragLayer } from "react-dnd";
import CardPreview from "./CardPreview";

const CustomDragLayer = () => {
  const { item, isDragging, currentClientOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      isDragging: monitor.isDragging(),
      currentClientOffset: monitor.getSourceClientOffset(),
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
    }));
  

  if (!isDragging) {
    return null;
  }
  let style;
  if (currentClientOffset) {
    style = {
      transform: `translate(${
        currentClientOffset.x - window.innerWidth / 2
      }px , ${currentClientOffset.y - window.innerHeight / 10}px)`,
    };
  }

  return <CardPreview style={style} item={item.props} />;
};

export default CustomDragLayer;
