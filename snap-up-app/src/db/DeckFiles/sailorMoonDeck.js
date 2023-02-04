const abilities = require("../abilities");

const sailorMoonDeck = {
  name: "Sailor Moon Deck",
  cards: [
    {
      name: "Tuxedo Mask",
      cost: 1,
      power: 0,
      img: "/cardImages/tuxedo_mask.jpg",
      ability: abilities[0],
    },
    {
      name: "Sailor Mercury",
      cost: 1,
      power: 3,
      img: "/cardImages/sailor_mercury.jpg",
      ability: abilities[0],
    },
    {
      name: "Sailor Mars",
      cost: 2,
      power: 5,
      img: "/cardImages/sailor_mars.jpg",
      ability: abilities[0],
    },
    {
      name: "Sailor Jupiter",
      cost: 3,
      power: 7,
      img: "/cardImages/sailor/sailor_jupiter.jpg",
      ability: abilities[0],
    },
    {
      name: "Sailor Venus",
      cost: 4,
      power: 10,
      img: "/cardImages/sailor/sailor_venus.jpg",
      ability: abilities[0],
    },
    {
      name: "Sailor Moon",
      cost: 6,
      power: 15,
      img: "/cardImages/sailor/sailor_moon.jpg",
      ability: abilities[0],
    },
  ],
};

module.exports = { sailorMoonDeck };
