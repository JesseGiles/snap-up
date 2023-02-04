const abilities = require("../abilities");

const horrorDeck = {
  name: "Horror Deck",
  cards: [
    {
      name: "Jason Voorhees",
      cost: 1,
      power: 0,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
    {
      name: "Michael Myers",
      cost: 1,
      power: 3,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
    {
      name: "Freddy Krueger",
      cost: 2,
      power: 5,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
    {
      name: "Leatherface",
      cost: 3,
      power: 7,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
    {
      name: "Pinhead",
      cost: 4,
      power: 10,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
    {
      name: "Candyman",
      cost: 6,
      power: 15,
      img: "/cardImages/jason.jpeg",
      ability: abilities[0],
    },
  ],
};

module.exports = { horrorDeck };
