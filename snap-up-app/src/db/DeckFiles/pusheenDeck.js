const abilities = require("../abilities");

const pusheenDeck = {
  name: "Pusheen Deck",
  cards: [
    {
      name: "Pip",
      cost: 1,
      power: 0,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
    {
      name: "Stormy",
      cost: 1,
      power: 3,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
    {
      name: "Pusheen",
      cost: 2,
      power: 5,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
    {
      name: "Dragonsheen",
      cost: 3,
      power: 7,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sloth",
      cost: 4,
      power: 10,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
    {
      name: "Super Pusheenicorn",
      cost: 6,
      power: 15,
      img: "/cardImages/dragonsheen.jpeg",
      ability: abilities[0],
    },
  ],
};

module.exports = { pusheenDeck };
