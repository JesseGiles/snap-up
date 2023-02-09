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

  const {
    state,
    setState,
    getInitialHand,
    nextTurn,
    moveCardBetween,
    broadcastForNextTurn,
  } = useGameData(props.socket, props.playerName);

  const [gameState, setGameState] = useState({ ...state });

  useEffect(() => {
    getInitialHand(
      state,
      setState,
      props.deckOne,
      props.deckTwo,
      props.socket,
      props.playerName
    );
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
        <div className="battlefield">
          <div className="player-avatar">
            <Avatar avatar={props.avatarImage} />
            <h2 className="player-name">{props.playerName}</h2>
          </div>
          <Lane
            position="leftCardZone"
            playerZoneCards={gameState.leftCardZone}
            oppZoneCards={gameState.oppLeftCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[0]}
          />
          <Lane
            position="middleCardZone"
            playerZoneCards={gameState.middleCardZone}
            oppZoneCards={gameState.oppMiddleCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[1]}
          />
          <Lane
            position="rightCardZone"
            playerZoneCards={gameState.rightCardZone}
            oppZoneCards={gameState.oppRightCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[2]}
          />
          <div className="opp-avatar">
            <Avatar avatar={props.opponentAvatar} />
            <h2 className="opp-name">{props.opponentName}</h2>
          </div>
        </div>
        <PlayerZone
          player={props.playerName}
          hand={gameState.hand}
          deck={gameState.deck}
          turn={gameState.turn}
          energy={gameState.energy}
          onClick={broadcastForNextTurn}
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
