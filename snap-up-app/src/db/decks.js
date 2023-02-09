const { horrorDeck } = require("../db/DeckFiles/horrorDeck.js");
const { sailorMoonDeck } = require("../db/DeckFiles/sailorMoonDeck.js");
const { pusheenDeck } = require("../db/DeckFiles/pusheenDeck.js");
const { goldenGirlsDeck } = require("../db/DeckFiles/goldenGirlsDeck.js");
const { cerealDeck } = require("../db/DeckFiles/cerealDeck.js");
const { animalCrossingDeck } = require("../db/DeckFiles/animalCrossingDeck.js");

const decks = {
  pusheenDeck,
  sailorMoonDeck,
  horrorDeck,
  goldenGirlsDeck,
  cerealDeck,
  animalCrossingDeck,
};

module.exports = { decks };
