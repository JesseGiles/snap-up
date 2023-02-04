const abilities = require("../abilities");

const horrorDeck = {
  name: "Horror Deck",
  cards: [
    {
      name: "Chucky",
      cost: 1,
      power: 0,
      img: "/cardImages/horror/chucky.png",
      ability: abilities[0],
    },
    {
      name: "Freddy Krueger",
      cost: 1,
      power: 3,
      img: "/cardImages/horror/freddy.png",
      ability: abilities[0],
    },
    {
      name: "Leatherface",
      cost: 2,
      power: 5,
      img: "/cardImages/horror/leatherface.png",
      ability: abilities[0],
    },
    {
      name: "Pinhead",
      cost: 3,
      power: 7,
      img: "/cardImages/horror/pinhead.png",
      ability: abilities[0],
    },
    {
      name: "Michael Myers",
      cost: 4,
      power: 10,
      img: "/cardImages/horror/michael.png",
      ability: abilities[0],
    },
    {
      name: "Jason Voorhees",
      cost: 6,
      power: 15,
      img: "/cardImages/horror/jason.png",
      ability: abilities[0],
    },
  ],
};

module.exports = { horrorDeck };
