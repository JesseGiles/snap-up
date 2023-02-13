import { useState, useEffect } from "react";
import { shuffle, enterBattlefield } from "../helpers/selectors.js";
import { useNavigate } from "react-router-dom";
import decks from "../db/decks.js";
import abilities from "../db/abilities.js";

const _ = require("lodash");

const useGameData = (socket, playerName) => {
  console.log("socket at line 13 usegamedata: ", socket);

  const navigate = useNavigate();
  const [state, setState] = useState({
    // shuffle calls the function and puts in the two 1/2 decks as one combined array of 12 cards
    deck: [],
    hand: [],
    energy: 0,
    turn: 0,
    leftCardZone: [],
    middleCardZone: [],
    rightCardZone: [],
    oppLeftCardZone: [],
    oppMiddleCardZone: [],
    oppRightCardZone: [],
    playerReady: false,
    opponentReady: false,
    playerAbilityQueue: [],
    oppAbilityQueue: [],
    isGameOver: false,
    waitingForNextTurn: false,
  });

  useEffect(() => {
    if (state.playerReady && state.opponentReady) {
      nextTurn(state, setState, socket, playerName);
    }
  }, [nextTurn, state.playerReady, state.opponentReady, socket]);

  function broadcastForNextTurn(setState, socket, player) {
    if (!state.playerReady) {
      socket.emit("opponentReady", {
        player: player,
      });
      setState((prev) => ({ ...prev, playerReady: true }));
    }
    if (!state.opponentReady) {
      setState((prev) => ({ ...prev, waitingForNextTurn: true }));
    }
  }

  function nextTurn(state, setState, socket, player) {
    socket.emit("nextTurn", {
      // data to send to server
      player: player,
      leftCardZone: state.leftCardZone,
      middleCardZone: state.middleCardZone,
      rightCardZone: state.rightCardZone,
    });

    // console.log("useGameData, line 55: opponent ready:", state.opponentReady, "player ready:", state.playerReady);
    // if (state.opponentReady && state.playerReady) {
    if (state.turn < 6) {
      // map through each of the cardzone arrays and set cardPosition = 'fixed'
      const newLeftCardZone = [...state.leftCardZone];
      const newMiddleCardZone = [...state.middleCardZone];
      const newRightCardZone = [...state.rightCardZone];
      const newPlayerAbilityQueue = [];

      newLeftCardZone.map((card) => {
        console.log("left card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "left",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newMiddleCardZone.map((card) => {
        console.log("middle card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "middle",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newRightCardZone.map((card) => {
        console.log("right card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "right",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      // console.log("ABILITY QUEUE:", newPlayerAbilityQueue);

      setState((prev) => ({
        ...prev,
        leftCardZone: newLeftCardZone,
        middleCardZone: newMiddleCardZone,
        rightCardZone: newRightCardZone,
        turn: prev.turn + 1,
        energy: prev.turn + 1,
        playerReady: false,
        opponentReady: false,
        playerAbilityQueue: newPlayerAbilityQueue,
        waitingForNextTurn: false,
      }));

      if (state.deck.length > 0) {
        console.log("You still have cards in your deck");
        const newDeck = [...state.deck];
        const draw = [...state.hand];
        draw.push(newDeck.pop());

        setState((prev) => ({
          ...prev,
          hand: draw,
          deck: newDeck,
        }));
      }
    } else if (state.turn >= 0) {
      console.log("GAME OVER!", state);
      const newLeftCardZone = [...state.leftCardZone];
      const newMiddleCardZone = [...state.middleCardZone];
      const newRightCardZone = [...state.rightCardZone];
      const newPlayerAbilityQueue = [];

      newLeftCardZone.map((card) => {
        console.log("left card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "left",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newMiddleCardZone.map((card) => {
        console.log("middle card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "middle",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newRightCardZone.map((card) => {
        console.log("right card is:", card);
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "right",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      // console.log("ABILITY QUEUE:", newPlayerAbilityQueue);

      setState((prev) => ({
        ...prev,
        leftCardZone: newLeftCardZone,
        middleCardZone: newMiddleCardZone,
        rightCardZone: newRightCardZone,
        turn: prev.turn + 1,
        energy: prev.turn + 1,
        playerReady: false,
        opponentReady: false,
        playerAbilityQueue: newPlayerAbilityQueue,
        isGameOver: true,
      }));
    }
  }

  function getInitialHand(state, setState, deckOne, deckTwo, socket, player) {
    // console.log("Deck ONE:", deckOne);
    // console.log("Deck TWO:", deckTwo);
    // console.log("Decks import in usegamedata: ", decks);
    // console.log("Decks", decks.horrorDeck);

    let startDeckOne;
    let startDeckTwo;
    switch (deckOne) {
      case 1:
        startDeckOne = decks.horrorDeck;
        break;
      case 2:
        startDeckOne = decks.pusheenDeck;
        break;
      case 3:
        startDeckOne = decks.sailorMoonDeck;
        break;
      case 4:
        startDeckOne = decks.goldenGirlsDeck;
        break;
      case 5:
        startDeckOne = decks.cerealDeck;
        break;
      case 6:
        startDeckOne = decks.animalCrossingDeck;
        break;

      default:
        alert("ERROR! NO VALID DECK");
    }
    switch (deckTwo) {
      case 1:
        startDeckTwo = decks.horrorDeck;
        break;
      case 2:
        startDeckTwo = decks.pusheenDeck;
        break;
      case 3:
        startDeckTwo = decks.sailorMoonDeck;
        break;
      case 4:
        startDeckTwo = decks.goldenGirlsDeck;
        break;
      case 5:
        startDeckTwo = decks.cerealDeck;
        break;
      case 6:
        startDeckTwo = decks.animalCrossingDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }

    //console.log("state before we shuffle a deck", state);
    const newDeck = shuffle(_.cloneDeep(startDeckOne.cards.concat(startDeckTwo.cards)));
    const draw = [];
    draw.push(newDeck.pop());
    draw.push(newDeck.pop());
    draw.push(newDeck.pop());
    setState((prev) => ({
      ...prev,
      hand: draw,
      deck: newDeck,
      turn: 0,
      energy: 0,
    }));
    setTimeout(() => {
      //console.log("SETTIMEOUT CALLED");
      draw.push(newDeck.pop());

      //console.log("SETTIMEOUT draw and newDeck:", draw, newDeck);
      setState((prev) => ({
        ...prev,
        hand: draw,
        deck: newDeck,
        turn: 1,
        energy: 1,
      }));
    }, 2000);

    socket.on("opponentReady", (data) => {
      //console.log("line 198: socket opponent ready DATA IS:", data);
      //console.log("line 199: player IS:", player);
      if (data.player !== player) {
        setState((prev) => ({ ...prev, opponentReady: true }));
      }
    });

    socket.on("turnInfo", (data) => {
      console.log("TurnInfo data received from server is:", data);

      let opponent = {};
      if (data[0].player === player) {
        opponent = data[1];
      } else {
        opponent = data[0];
      }

      //math their abilties

      const oppLeftCardZone = opponent.leftCardZone;
      const oppMiddleCardZone = opponent.middleCardZone;
      const oppRightCardZone = opponent.rightCardZone;
      const newOppAbilityQueue = [];

      oppLeftCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "left",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      oppMiddleCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "middle",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      oppRightCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "right",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });

      console.log(
        "oppAbilityQueue in turnInfo before setting state",
        newOppAbilityQueue
      );

      setState((prev) => ({
        ...prev,
        oppLeftCardZone: oppLeftCardZone,
        oppMiddleCardZone: oppMiddleCardZone,
        oppRightCardZone: oppRightCardZone,
        oppAbilityQueue: newOppAbilityQueue,
      }));
    });
  }

  function resolvePlayerAbilitiesQueue(queue) {
    console.log("entered function PlayerresolveAbilityQueue:", queue);
    //friendlyTarget
    let targetArr;
    let updatedArr;
    let arrName;
    //drawCards
    let newHandAndDeck;
    //addEnergy
    let newEnergy;
    //playCardsFromDeck
    let newZoneAndDeck;

    for (let ability of queue) {
      if (ability.lane === "left") {
        targetArr = [...state.leftCardZone];
        arrName = "leftCardZone";
      }
      if (ability.lane === "middle") {
        targetArr = [...state.middleCardZone];
        arrName = "middleCardZone";
      }
      if (ability.lane === "right") {
        targetArr = [...state.rightCardZone];
        arrName = "rightCardZone";
      }
      console.log("ABILITY is:", ability);
      if (ability.cardAbility[0] === "addPower") {
        updatedArr = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          targetArr
        );

        setState((prev) => ({
          ...prev,
          [arrName]: updatedArr,
        }));
      }
      if (ability.cardAbility[0] === "drawCards") {
        newHandAndDeck = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          state
        );
        setState((prev) => ({
          ...prev,
          deck: newHandAndDeck[0],
          hand: newHandAndDeck[1],
        }));
      }
      if (ability.cardAbility[0] === "addEnergy") {
        newEnergy = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          state
        );
        setState((prev) => ({
          ...prev,
          energy: newEnergy,
        }));
      }
      if (ability.cardAbility[0] === "playCardFromDeck") {
        newZoneAndDeck = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          state,
          targetArr
        );

        setState((prev) => ({
          ...prev,
          deck: newZoneAndDeck[0],
          [arrName]: newZoneAndDeck[1],
        }));
      }
      if (ability.cardAbility[0] === "shuffleHandIntoDeck") {
        newHandAndDeck = enterBattlefield(ability.cardAbility[0], state);
        setState((prev) => ({
          ...prev,
          deck: newHandAndDeck[0],
          hand: newHandAndDeck[1],
        }));
      }
    }
  }

  function resolveOppAbilitiesQueue(queue) {
    console.log("entered function OppresolveAbilityQueue:", queue);
    let targetArr;
    let updatedArr;
    let arrName;
    for (let ability of queue) {
      if (ability.lane === "left") {
        targetArr = [...state.oppLeftCardZone];
        arrName = "oppLeftCardZone";
      }
      if (ability.lane === "middle") {
        targetArr = [...state.oppMiddleCardZone];
        arrName = "oppMiddleCardZone";
      }
      if (ability.lane === "right") {
        targetArr = [...state.oppRightCardZone];
        arrName = "oppRightCardZone";
      }
      console.log("ABILITY is:", ability);
      if (ability.cardAbility[0] === "addPower") {
        updatedArr = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          targetArr
        );
        console.log("array that triggered opp ability queue:", updatedArr);

        setState((prev) => ({
          ...prev,
          [arrName]: updatedArr,
        }));
      }
    }
  }

  //MOVE ALL OF ME LATER
  function reduceEnergyOnDrop(energy, cost) {
    console.log("initial energyondrop: ", energy);

    energy -= cost;
    console.log("energy after reduce:", energy);
    return energy;
  }

  function addEnergyOnDrop(energy, cost) {
    energy += cost;

    return energy;
  }

  function moveCardBetween(card, srcZone, targetZone) {
    let srcArr = state[srcZone]; //array to remove card from, ie. hand
    let targetArr = state[targetZone]; //array to add card to, ie. cardzone
    let currEnergy = state.energy;
    let newEnergy;
    let cardObj = { ...card };
    console.log("CARDOBJ", cardObj);
    console.log("card position before:", cardObj.cardPosition);
    console.log("TargetZone:", targetZone);
    cardObj["cardPosition"] = targetZone;
    if (srcZone !== targetZone) {
      targetArr.push(cardObj);
      console.log("TargetArr with new card", targetArr);
      console.log("srcArr before filter", srcArr);
      srcArr = srcArr.filter((cardToRemove) => cardToRemove.id !== card.id);
      console.log("srcArr after filter", srcArr);
    }

    //changes logic based on wher you are dropping
    if (srcZone === "hand" && targetZone !== "hand") {
      newEnergy = reduceEnergyOnDrop(currEnergy, card.cost);
    } else if (targetZone === "hand" && srcZone !== "hand") {
      newEnergy = addEnergyOnDrop(currEnergy, card.cost);
    } else {
      newEnergy = currEnergy;
    }

    setState((prev) => ({
      ...prev,
      [targetZone]: targetArr,
      [srcZone]: srcArr,
      energy: newEnergy,
    }));
  }

  return {
    state,
    setState,
    moveCardBetween,

    getInitialHand,
    broadcastForNextTurn,
    resolvePlayerAbilitiesQueue,
    resolveOppAbilitiesQueue,
  };
};

export default useGameData;
