import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../component-styles/game.css";
import Lane from "./Lane";
import Avatar from "./Avatar";
import PlayerZone from "./PlayerZone";
import useGameData from "../../hooks/useGameData";
const {
  oppLeftCardZone,
  oppMiddleCardZone,
  oppRightCardZone,
} = require("../../db/oppTestCards.js");

function Game(props) {
  console.log("props recieved by game:", props);

  const { state, setState, getInitialHand, nextTurn, moveCardBetween } =
    useGameData();

  const [gameState, setGameState] = useState({ ...state });

  useEffect(() => {
    getInitialHand(state, setState, props.deckOne, props.deckTwo);
    setGameState({ ...state });
  }, []);

  useEffect(() => {
    setGameState({ ...state });
  }, [state]);

  //checks to ensure copy of state is also updated
  console.log("state on gameRerender: ", state);

  return (
    <div className="game">
      <DndProvider backend={HTML5Backend}>
        <header className="player-data-header">
          <Avatar avatar={props.avatarImage} />
          <h1 className="versus">
            {props.playerName} VS {props.opponentName}
          </h1>
          <Avatar avatar={props.opponentAvatar} />
        </header>
        <div className="battlefield">
          <Lane
            position="leftCardZone"
            playerZoneCards={gameState.leftCardZone}
            oppZoneCards={gameState.oppLeftCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
          <Lane
            position="middleCardZone"
            playerZoneCards={gameState.middleCardZone}
            oppZoneCards={gameState.oppMiddleCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
          <Lane
            position="rightCardZone"
            playerZoneCards={gameState.rightCardZone}
            oppZoneCards={gameState.oppRightCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
          />
        </div>
        <PlayerZone
          player={props.playerName}
          hand={gameState.hand}
          deck={gameState.deck}
          turn={gameState.turn}
          energy={gameState.energy}
          onClick={nextTurn}
          moveCardBetween={moveCardBetween}
          state={state}
          setState={setState}
          socket={props.socket}
        />
      </DndProvider>
    </div>
  );
}

export default Game;
