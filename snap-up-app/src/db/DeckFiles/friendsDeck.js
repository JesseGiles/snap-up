

const friendsDeck = {
  name: "Friends Deck",
  cards: [
    {
      id: 37,
      name: "Joey",
      cost: 1,
      power: 2,
      img: "cardImages/friends/joey.webp",
      ability: ["addEnergy", 1],
      description: "Add 1 bonus energy on your next turn.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
    {
      id: 38,
      name: "Ross",
      cost: 2,
      power: 5,
      img: "cardImages/friends/ross.webp",
      ability: ["drawCards", 1],
      description: "Draw an extra card on your next turn.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
    {
      id: 39,
      name: "Chandler",
      cost: 3,
      power: 7,
      img: "cardImages/friends/chandler.webp",
      ability: ["addPower", 1],
      description: "Give all friendly cards in this location +1 power.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
    {
      id: 40,
      name: "Phoebe",
      cost: 3,
      power: 7,
      img: "cardImages/friends/phoebe.webp",
      ability: ["shuffleHandIntoDeck", 3],
      description:
        "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
    {
      id: 41,
      name: "Monica",
      cost: 4,
      power: 10,
      img: "cardImages/friends/monica.webp",
      ability: ["playCardFromDeck", 1],
      description:
        "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
    {
      id: 42,
      name: "Rachel",
      cost: 6,
      power: 15,
      img: "cardImages/friends/rachel.webp",
      ability: ["addPower", 4],
      description: "Give all friendly cards in this location +4 power.",
      cardPosition: "hand",
      deck: "friends",
      locationBonus: false,
    },
  ],
};

export default friendsDeck;
