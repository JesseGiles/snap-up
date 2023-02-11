import abilities from "../abilities.js";

const horrorDeck = {
  name: "Horror Deck",
  cards: [
    {
      id: 1,
      name: "Chucky",
      cost: 1,
      power: 1,
      img: "/cardImages/horror/chucky.png",
      ability: ['drawCards', 1],
      description: "Draw two cards",
      cardPosition: "hand",
      deck: "horror",
    },
    {
      id: 2,
      name: "Freddy",
      cost: 2,
      power: 3,
      img: "/cardImages/horror/freddy.png",
      ability: ['playCardFromDeck', 2],
      description: "Play 2 cards from your deck into this lane",
      cardPosition: "hand",
      deck: "horror",
    },
    {
      id: 3,
      name: "Leatherface",
      cost: 3,
      power: 5,
      img: "/cardImages/horror/leatherface.png",
      ability: ['addEnergy', 3],
      description: "Add additional 3 energy to your next turn",
      cardPosition: "hand",
      deck: "horror",
    },
    {
      id: 4,
      name: "Pinhead",
      cost: 4,
      power: 7,
      img: "/cardImages/horror/pinhead.png",
      ability: ['addPower', 4],
      description: "Give all friendly cards in this location +4 power",
      cardPosition: "hand",
      deck: "horror",
    },
    {
      id: 5,
      name: "Michael Myers",
      cost: 5,
      power: 10,
      img: "/cardImages/horror/mmyers.gif",
      ability: ['addPower', 5],
      description: "Give all friendly cards in this location +5 power",
      cardPosition: "hand",
      deck: "horror",
    },
    {
      id: 6,
      name: "Jason",
      cost: 6,
      power: 15,
      img: "/cardImages/horror/jasonstab.gif",
      ability: ['addPower', 6],
      description: "Give all friendly cards in this location +6 power",
      cardPosition: "hand",
      deck: "horror",
    },
  ],
};

export default horrorDeck;
