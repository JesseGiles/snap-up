import { useState } from "react";
import { shuffle } from "../helpers/selectors.js";

const { horrorDeck } = require("../db/DeckFiles/horrorDeck.js");
const { sailorMoonDeck } = require("../db/DeckFiles/sailorMoonDeck.js");
const { pusheenDeck } = require("../db/DeckFiles/pusheenDeck.js");

const useGameData = () => {
  const [state, setState] = useState({
    // shuffle calls the function and puts in the two 1/2 decks as one combined array of 12 cards
    deck: shuffle(horrorDeck.cards.concat(pusheenDeck.cards)),
    hand: [],
    energy: 0,
    turn: 0,
    leftCardZone: [],
    middleCardZone: [],
    rightCardZone: [],
  });

  function nextTurn(state, setState) {
    if (state.deck.length > 0 && state.turn < 6) {
      const newDeck = [...state.deck];
      const draw = [...state.hand];
      draw.push(newDeck.pop());
      setState((prev) => ({
        ...prev,
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

  function getInitialHand(state, setState) {
    const newDeck = [...state.deck];
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

  function moveCardBetween(card, srcZone, targetZone) {
    let srcArr = state[srcZone]; //array to remove card from, ie. hand
    let targetArr = state[targetZone]; //array to add card to, ie. cardzone

    targetArr.push(card);

    srcArr = srcArr.filter((cardinHand) => cardinHand.id !== card.id);

    const newEnergy = reduceEnergyOnDrop(state.energy, card.cost);
    setState((prev) => ({
      ...prev,

      [targetArr]: targetArr,
      hand: srcArr,
      energy: newEnergy,
    }));
  }

  return { state, setState, moveCardBetween, nextTurn, getInitialHand };
};

export default useGameData;
