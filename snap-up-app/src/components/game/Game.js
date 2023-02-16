import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../component-styles/game.css";
import Lane from "./Lane";
import Avatar from "./Avatar";
import PlayerZone from "./PlayerZone";
import GameOver from "./GameOver";
import NextTurnNotReady from "./NextTurnNotReady";
import useGameData from "../../hooks/useGameData";
import CustomDragLayer from "./CustomDragLayer";

function Game(props) {
  const {
    state,
    setState,
    getInitialHand,
    moveCardBetween,
    nextTurn,
    broadcastForNextTurn,
    resolvePlayerAbilitiesQueue,
    resolveOppAbilitiesQueue,
    buffCardsIfMatching,
    buffOppCardsIfMatching
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
    if (state.playerAbilityQueue.length > 0) {
      resolvePlayerAbilitiesQueue(state.playerAbilityQueue);
    }
  }, [state.playerAbilityQueue]);

  //runs the opp's ability queue at the end of the turn
  useEffect(() => {
    if (state.oppAbilityQueue.length > 0) {
      resolveOppAbilitiesQueue(state.oppAbilityQueue);
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

  return (
    <div className="game">
      <NextTurnNotReady waitingForNextTurn={state.waitingForNextTurn} opponent={props.opponentName} gameOverState={state.isGameOver}/>
      <GameOver socket={props.socket} gameOverState={gameState} />
      <DndProvider backend={HTML5Backend}>
        <CustomDragLayer />
        <div className="battlefield">
          <div className="player-avatar">
            <Avatar avatar={props.avatarImage} />
            <h4 className="player-name">{props.playerName}</h4>
          </div>
          <Lane
            position="leftCardZone"
            playerZoneCards={gameState.leftCardZone}
            oppZoneCards={gameState.oppLeftCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[0]}
            buffCardsIfMatching={buffCardsIfMatching}
            buffOppCardsIfMatching={buffOppCardsIfMatching}
            setState={setState}
            playerAbilityQueue={gameState.playerAbilityQueue}
            oppAbilityQueue={gameState.oppAbilityQueue}
            
          />
          <Lane
            position="middleCardZone"
            playerZoneCards={gameState.middleCardZone}
            oppZoneCards={gameState.oppMiddleCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[1]}
            buffCardsIfMatching={buffCardsIfMatching}
            buffOppCardsIfMatching={buffOppCardsIfMatching}
            setState={setState}
            playerAbilityQueue={gameState.playerAbilityQueue}
            oppAbilityQueue={gameState.oppAbilityQueue}
            
          />
          <Lane
            position="rightCardZone"
            playerZoneCards={gameState.rightCardZone}
            oppZoneCards={gameState.oppRightCardZone}
            energy={gameState.energy}
            moveCardBetween={moveCardBetween}
            hand={gameState.hand}
            location={props.locations[2]}
            buffCardsIfMatching={buffCardsIfMatching}
            buffOppCardsIfMatching={buffOppCardsIfMatching}
            setState={setState}
            playerAbilityQueue={gameState.playerAbilityQueue}
            oppAbilityQueue={gameState.oppAbilityQueue}
            
            
          />
          <div className="opp-avatar">
            <Avatar avatar={props.opponentAvatar} />
            <h4 className="opp-name">{props.opponentName}</h4>
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
