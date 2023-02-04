import { useState } from "react";
const { horrorDeck } = require("../db/DeckFiles/horrorDeck.js");
const { sailorMoonDeck } = require("../db/DeckFiles/sailorMoonDeck.js");
const { pusheenDeck } = require("../db/DeckFiles/pusheenDeck.js");

const useGameData = () => {
  // This shuffles the deck for the initial state of deck
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const [state, setState] = useState({
    // shuffle calls the function and puts in the two 1/2 decks as one combined array of 12 cards
    deck: shuffle(horrorDeck.cards.concat(pusheenDeck.cards)),
    hand: [],
    energy: 0,
    turn: 0,
  });

  return { state, setState };
};

export default useGameData;
