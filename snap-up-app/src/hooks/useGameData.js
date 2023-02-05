import { useState } from "react";
import { shuffle } from "../helpers/selectors.js";
import {
  placeCardOnBattlefield,
  reduceEnergyOnDrop,
  removeCardFromHand,
} from "../helpers/onDrop.js";
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

  function onDrop(card, targetArray, energy) {
    console.log("this is energy inside onDrop", energy);
    //wrap in promise
    placeCardOnBattlefield(card, targetArray);
    let updatedEnergy = reduceEnergyOnDrop(card.cost, energy);
    removeCardFromHand();

    setState({
      ...state,
      energy: updatedEnergy,
    });
  }

  return { state, setState, onDrop };
};

export default useGameData;
