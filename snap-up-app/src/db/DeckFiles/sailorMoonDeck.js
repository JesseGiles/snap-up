const { abilities } = require("../abilities.js");

const sailorMoonDeck = {
  name: "Sailor Moon Deck",
  cards: [
    {
      id: 13,
      name: "Tuxedo Mask",
      cost: 1,
      power: 0,
      img: "/cardImages/sailor/tuxedo_mask.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
    {
      id: 14,
      name: "Sailor Mercury",
      cost: 1,
      power: 3,
      img: "/cardImages/sailor/sailor_mercury.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
    {
      id: 15,
      name: "Sailor Mars",
      cost: 2,
      power: 5,
      img: "/cardImages/sailor/sailor_mars.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
    {
      id: 16,
      name: "Sailor Jupiter",
      cost: 3,
      power: 7,
      img: "/cardImages/sailor/sailor_jupiter.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
    {
      id: 17,
      name: "Sailor Venus",
      cost: 4,
      power: 10,
      img: "/cardImages/sailor/sailor_venus.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
    {
      id: 18,
      name: "Sailor Moon",
      cost: 6,
      power: 15,
      img: "/cardImages/sailor/sailor_moon.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "sailor-moon",
    },
  ],
};

module.exports = { sailorMoonDeck };
