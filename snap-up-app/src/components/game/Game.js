import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../component-styles/game.css";
import Lane from "./Lane";
import Avatar from "./Avatar";
import PlayerZone from "./PlayerZone";
import GameOver from "./Modal";
import NextTurnNotReady from "./NextTurnNotReady";
import useGameData from "../../hooks/useGameData";
import CustomDragLayer from "./CustomDragLayer";

function Game(props) {
  console.log("props recieved by game:", props);

  const {
    state,
    setState,
    getInitialHand,
    moveCardBetween,
    broadcastForNextTurn,
    resolvePlayerAbilitiesQueue,
    resolveOppAbilitiesQueue,
  } = useGameData(props.socket, props.playerName);

  const [gameState, setGameState] = useState({ ...state });

  //prevents the default right click menu, needs an event listen disabler in the game over
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }, []);
  //run once at start of game.
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

  //runs the player's ability queue at the end of the turn
  useEffect(() => {
    console.log("trying to use playerqueue useEffect");
    if (state.playerAbilityQueue.length > 0) {
      console.log(
        "ability queue player prior to resolve:",
        state.playerAbilityQueue
      );
      resolvePlayerAbilitiesQueue(state.playerAbilityQueue);
      console.log(
        "useeffect resolve abilites player que: ",
        state.playerAbilityQueue
      );
    }
  }, [state.playerAbilityQueue]);

  //runs the opp's ability queue at the end of the turn
  useEffect(() => {
    console.log("trying to use oppqueue useEffect");
    if (state.oppAbilityQueue.length > 0) {
      console.log("ability queue opp prior to resolve:", state.oppAbilityQueue);
      resolveOppAbilitiesQueue(state.oppAbilityQueue);
      console.log(
        "useeffect resolve abilites opp que: ",
        state.oppAbilityQueue
      );
    }
  }, [state.oppAbilityQueue]);

  //testing for reveal phase unsure if need
  // useEffect(() => {
  //   let revealArr = state.oppLeftCardZone.concat(state.oppMiddleCardZone,state.oppRightCardZone)
  //   for (let card of revealArr) {

  //   }
  // }, [state.oppLeftCardZone, state.oppMiddleCardZone, state.oppRightCardZone]);

  //creates duplicate state to have access to copy of state.
  useEffect(() => {
    setGameState({ ...state });
  }, [state]);

  //checks to ensure copy of state is also updated
  console.log("state on gameRerender: ", state);

  return (
    <div className="game">
      <NextTurnNotReady waitingForNextTurn={state.waitingForNextTurn} />
      <GameOver socket={props.socket} gameOverState={gameState} />
      <DndProvider backend={HTML5Backend}>
        <CustomDragLayer />
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
