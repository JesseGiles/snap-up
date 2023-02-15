import abilities from "../abilities.js";

const sailorMoonDeck = {
  name: "Sailor Moon Deck",
  cards: [
    {
      id: 13,
      name: "Tuxedo Mask",
      cost: 1,
      power: 0,
      img: "/cardImages/sailor/tuxedo_mask.jpg",
      ability: ["drawCards", 2],
      description: "Draw two cards on your next turn.",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
    {
      id: 14,
      name: "Sailor Mercury",
      cost: 2,
      power: 3,
      img: "/cardImages/sailor/sailor_mercury.jpg",
      ability: ["playCardFromDeck", 2],
      description:
        "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
    {
      id: 15,
      name: "Sailor Mars",
      cost: 2,
      power: 5,
      img: "/cardImages/sailor/sailor_mars.jpg",
      ability: ["addEnergy", 3],
      description: "Add additional 3 energy to your next turn",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
    {
      id: 16,
      name: "Sailor Jupiter",
      cost: 3,
      power: 7,
      img: "/cardImages/sailor/sailor_jupiter.jpg",
      ability: ["shuffleHandIntoDeck", 3],
      description:
        "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
    {
      id: 17,
      name: "Sailor Venus",
      cost: 4,
      power: 10,
      img: "/cardImages/sailor/sailor_venus.jpg",
      ability: ["addPower", 2],
      description: "Give all friendly cards in this location +2 power",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
    {
      id: 18,
      name: "Sailor Moon",
      cost: 6,
      power: 15,
      img: "/cardImages/sailor/sailor_moon.jpg",
      ability: ["addPower", 4],
      description: "Give all friendly cards in this location +4 power",
      cardPosition: "hand",
      deck: "sailor-moon",
      locationBonus: false,
    },
  ],
};

export default sailorMoonDeck;
