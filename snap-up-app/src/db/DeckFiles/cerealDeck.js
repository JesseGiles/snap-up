const { abilities } = require("../abilities.js");

const cerealDeck = {
  name: "Cereal Deck",
  cards: [
    {
      id: 25,
      name: "Snap Crackle Pop",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/snapcrackle.gif",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
    {
      id: 26,
      name: "Tricks",
      cost: 2,
      power: 3,
      img: "/cardImages/cereal/trix.gif",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
    {
      id: 27,
      name: "Toucan Sam",
      cost: 3,
      power: 5,
      img: "/cardImages/cereal/ToucanSam2.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
    {
      id: 28,
      name: "Lucky",
      cost: 4,
      power: 7,
      img: "/cardImages/cereal/Lucky2.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
    {
      id: 29,
      name: "Cpt Crunch",
      cost: 5,
      power: 10,
      img: "/cardImages/cereal/CptCrunch2.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
    {
      id: 30,
      name: "Tony the Tiger",
      cost: 6,
      power: 15,
      img: "/cardImages/cereal/Tony2.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "cereal",
    },
  ],
};

module.exports = { cerealDeck };
