

const horrorDeck = {
  name: "Horror Deck",
  cards: [
    {
      id: 1,
      name: "Chucky",
      cost: 1,
      power: 1,
      img: "/cardImages/horror/chucky.png",
      ability: ["drawCards", 1],
      description: "Draw an extra card on your next turn.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
    {
      id: 2,
      name: "Freddy",
      cost: 1,
      power: 3,
      img: "/cardImages/horror/freddy.png",
      ability: ["shuffleHandIntoDeck", 2],
      description:
        "Shuffle your hand back into your deck and draw two new cards.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
    {
      id: 3,
      name: "Leatherface",
      cost: 1,
      power: 1,
      img: "/cardImages/horror/leatherface.png",
      ability: ["addEnergy", 3],
      description: "Add three bonus energy on your next turn.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
    {
      id: 4,
      name: "Pinhead",
      cost: 3,
      power: 7,
      img: "/cardImages/horror/pinhead.png",
      ability: ["addPower", 2],
      description: "Give all friendly cards in this location +2 power.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
    {
      id: 5,
      name: "Michael Myers",
      cost: 4,
      power: 10,
      img: "/cardImages/horror/mmyers.gif",
      ability: ["playCardFromDeck", 1],
      description:
        "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
    {
      id: 6,
      name: "Jason",
      cost: 6,
      power: 15,
      img: "/cardImages/horror/jasonstab.gif",
      ability: ["addPower", 4],
      description: "Give all friendly cards in this location +4 power.",
      cardPosition: "hand",
      deck: "horror",
      locationBonus: false,
    },
  ],
};

export default horrorDeck;
