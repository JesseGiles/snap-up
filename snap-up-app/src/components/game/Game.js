import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../component-styles/game.css";
import Lane from "./Lane";
import PlayerZone from "./PlayerZone";
import useGameData from "../../hooks/useGameData";
import { getInitialHand, nextTurn } from "../../helpers/selectors";

function Game() {
  const { state, setState } = useGameData();

  useEffect(() => {
    getInitialHand(state, setState);
  }, []);

  const testEmptyArray = [];

  // Note from Jeremy: I removed the opponent playerzone. We'd probably want a whole separate state for it and to call it something like <OpponentZone /> for rendering.
  return (
    <div className="game">
      <DndProvider backend={HTML5Backend}>
        <div className="battlefield">
          <Lane position="left" droppedCards={state.leftCardZone} />
          <Lane position="mid" droppedCards={state.middleCardZone} />
          <Lane position="right" droppedCards={testEmptyArray} />
        </div>
        <PlayerZone
          player="p1-self"
          hand={state.hand}
          deck={state.deck}
          turn={state.turn}
          energy={state.energy}
          onClick={nextTurn}
          state={state}
          setState={setState}
        />
      </DndProvider>
    </div>
  );
}

export default Game;
