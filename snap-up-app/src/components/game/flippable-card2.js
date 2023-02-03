import "./flippable-card.css";
import Card2 from "./card/card2";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function FlippableCard2() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card2
          onClick={() => {
            setShowFront((view) => !view);
          }}
        />
      </CSSTransition>
    </div>
  );
}
