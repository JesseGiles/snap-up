import { useState } from "react";
import { shuffle } from "../helpers/selectors.js";

const { horrorDeck } = require("../db/DeckFiles/horrorDeck.js");
const { sailorMoonDeck } = require("../db/DeckFiles/sailorMoonDeck.js");
const { pusheenDeck } = require("../db/DeckFiles/pusheenDeck.js");
const {
  oppLeftCardZone,
  oppMiddleCardZone,
  oppRightCardZone,
} = require("../db/oppTestCards.js");

const useGameData = () => {
  const [state, setState] = useState({
    // shuffle calls the function and puts in the two 1/2 decks as one combined array of 12 cards
    deck: [],
    hand: [],
    energy: 0,
    turn: 0,
    leftCardZone: [],
    middleCardZone: [],
    rightCardZone: [],
    oppCardZones: {
      leftCardZone: [],
      middleCardZone: [],
      rightCardZone: [],
    },
  });

  function oppNextTurn() {
    const left = state.oppCardZones.leftCardZone.push(oppLeftCardZone.pop());
    const mid = state.oppCardZones.middleCardZone.push(oppMiddleCardZone.pop());
    const right = state.oppCardZones.rightCardZone.push(oppRightCardZone.pop());
    let oppVals = {
      leftCardZone: left,
      middleCardZone: mid,
      rightCardZone: right,
    };
    return oppVals;
  }

  function nextTurn(state, setState) {
    if (state.deck.length > 0 && state.turn < 6) {
      const newDeck = [...state.deck];
      const draw = [...state.hand];
      draw.push(newDeck.pop());

      // map through each of the cardzone arrays and set cardPosition = 'fixed'
      const newLeftCardZone = [...state.leftCardZone];
      const newMiddleCardZone = [...state.middleCardZone];
      const newRightCardZone = [...state.rightCardZone];

      newLeftCardZone.map((card) => {
        card.cardPosition = "fixed";
      });
      newMiddleCardZone.map((card) => {
        card.cardPosition = "fixed";
      });
      newRightCardZone.map((card) => {
        card.cardPosition = "fixed";
      });

      const newOpp = oppNextTurn();

      setState((prev) => ({
        ...prev,
        leftCardZone: newLeftCardZone,
        middleCardZone: newMiddleCardZone,
        rightCardZone: newRightCardZone,
        oppCardZone: newOpp,
        hand: draw,
        deck: newDeck,
        turn: prev.turn + 1,
        energy: prev.turn + 1,
      }));
      console.log("after next turn, state is: ", state);
    } else if (state.turn >= 0) {
      // this is where we'd call the final counts and stuff and determine the winner
      console.log("GAME OVER!");
    } else {
      console.log(
        "you've hit a case where you have run out of cards in deck???"
      );
      setState((prev) => ({
        ...prev,
        turn: prev.turn + 1,
        energy: prev.turn + 1,
      }));
    }
  }

  function getInitialHand(state, setState, deckOne, deckTwo) {
    let startDeckOne;
    let startDeckTwo;
    switch (deckOne) {
      case 1:
        startDeckOne = horrorDeck;
        break;
      case 2:
        startDeckOne = pusheenDeck;
        break;
      case 3:
        startDeckOne = sailorMoonDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }
    switch (deckTwo) {
      case 1:
        startDeckTwo = horrorDeck;
        break;
      case 2:
        startDeckTwo = pusheenDeck;
        break;
      case 3:
        startDeckTwo = sailorMoonDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }

    const newDeck = shuffle(startDeckOne.cards.concat(startDeckTwo.cards));
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
  }

  function reduceEnergyOnDrop(energy, cost) {
    console.log("initial energyondrop: ", energy);

    energy -= cost;
    console.log("energy after reduce:", energy);
    return energy;
  }

  function addEnergyOnDrop(energy, cost) {
    if (energy + cost <= state.turn) {
      energy += cost;
    }
    return energy;
  }

  function moveCardBetween(card, srcZone, targetZone) {
    let srcArr = state[srcZone]; //array to remove card from, ie. hand
    let targetArr = state[targetZone]; //array to add card to, ie. cardzone
    let newEnergy;
    let cardObj = { ...card };
    console.log("card position before:", cardObj.cardPosition);
    console.log("TargetZone:", targetZone);
    cardObj["cardPosition"] = targetZone;
    if (srcZone !== targetZone) {
      targetArr.push(cardObj);
      srcArr = srcArr.filter((cardinHand) => cardinHand.id !== card.id);
    }

    //changes logic based on wher you are dropping
    if (srcZone === "hand" && targetZone !== "hand") {
      newEnergy = reduceEnergyOnDrop(state.energy, card.cost);
    } else if (targetZone === "hand" && srcZone !== "hand") {
      newEnergy = addEnergyOnDrop(state.energy, card.cost);
    } else {
      newEnergy = state.energy;
    }

    setState((prev) => ({
      ...prev,

      [targetZone]: targetArr,
      [srcZone]: srcArr,
      energy: newEnergy,
    }));
  }

  return { state, setState, moveCardBetween, nextTurn, getInitialHand };
};

export default useGameData;
