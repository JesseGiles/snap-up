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
      description: "Draw a cards",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false
    },
    {
      id: 2,
      name: "Freddy",
      cost: 2,
      power: 3,
      img: "/cardImages/horror/freddy.png",
      ability: ['playCardFromDeck', 1],
      description: "A random card is placed in this location from your deck for next turn.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false
    },
    {
      id: 3,
      name: "Leatherface",
      cost: 3,
      power: 5,
      img: "/cardImages/horror/leatherface.png",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false
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
      locationBonus: false
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
      locationBonus: false
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
      locationBonus: false
    },
  ],
};

export default horrorDeck;
