const abilities = require("../abilities");

const horrorDeck = {
  name: "Horror Deck",
  cards: [
    {
      id: 1,
      name: "Chucky",
      cost: 1,
      power: 1,
      img: "/cardImages/horror/chucky.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: 'horror'
    },
    {
      id: 2,
      name: "Freddy Krueger",
      cost: 2,
      power: 3,
      img: "/cardImages/horror/freddy.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: 'horror'
    },
    {
      id: 3,
      name: "Leatherface",
      cost: 3,
      power: 5,
      img: "/cardImages/horror/leatherface.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: 'horror'
    },
    {
      id: 4,
      name: "Pinhead",
      cost: 4,
      power: 7,
      img: "/cardImages/horror/pinhead.png",
      ability: abilities[0],
      cardPosition: "hand",
      deck: 'horror'
    },
    {
      id: 5,
      name: "Michael Myers",
      cost: 5,
      power: 10,
      img: "/cardImages/horror/michael.png",
      ability: abilities[1],
      cardPosition: "hand",
      deck: 'horror'
    },
    {
      id: 6,
      name: "Jason Voorhees",
      cost: 6,
      power: 15,
      img: "/cardImages/horror/jason.png",
      ability: abilities[2],
      cardPosition: "hand",
      deck: 'horror'
    },
  ],
};

module.exports = { horrorDeck };
