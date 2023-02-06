import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../component-styles/game.css";
import Lane from "./Lane";
import PlayerZone from "./PlayerZone";
import useGameData from "../../hooks/useGameData";

function Game() {
  const { state, setState, getInitialHand, nextTurn, moveCardBetween } =
    useGameData();

  const [gameState, setGameState] = useState({ ...state });

  useEffect(() => {
    getInitialHand(state, setState);
    setGameState({ ...state });
  }, []);

  useEffect(() => {
    setGameState({ ...state });
  }, [state]);

  // Note from Jeremy: I removed the opponent playerzone. We'd probably want a whole separate state for it and to call it something like <OpponentZone /> for rendering.
  console.log("gameState RERENDERED:", gameState);
  console.log("regular state on gameRerender: ", state);
  return (
    <div className="game">
      <DndProvider backend={HTML5Backend}>
        <div className="battlefield">
          <Lane
            position="leftCardZone"
            droppedCards={gameState.leftCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
          <Lane
            position="middleCardZone"
            droppedCards={gameState.middleCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
          <Lane
            position="rightCardZone"
            droppedCards={gameState.rightCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
        </div>
        <PlayerZone
          player="p1-self"
          hand={gameState.hand}
          deck={gameState.deck}
          turn={gameState.turn}
          energy={gameState.energy}
          onClick={nextTurn}
          state={state}
          setState={setState}
        />
      </DndProvider>
    </div>
  );
}

export default Game;
