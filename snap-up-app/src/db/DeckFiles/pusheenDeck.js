const abilities = require("../abilities");

const pusheenDeck = {
  name: "Pusheen Deck",
  cards: [
    {
      id: 7,
      name: "Pip",
      cost: 1,
      power: 1,
      img: "/cardImages/pusheen/pip.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
    {
      id: 8,
      name: "Stormy",
      cost: 1,
      power: 3,
      img: "/cardImages/pusheen/stormy.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
    {
      id: 9,
      name: "Pusheen",
      cost: 2,
      power: 5,
      img: "/cardImages/pusheen/pusheen.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
    {
      id: 10,
      name: "Dragonsheen",
      cost: 3,
      power: 7,
      img: "/cardImages/pusheen/dragonsheen.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
    {
      id: 11,
      name: "Sloth",
      cost: 6,
      power: 15,
      img: "/cardImages/pusheen/sloth.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
    {
      id: 12,
      name: "Pusheenicorn",
      cost: 5,
      power: 12,
      img: "/cardImages/pusheen/super_pusheenicorn.jpeg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "pusheen",
    },
  ],
};

module.exports = { pusheenDeck };
