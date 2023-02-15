import abilities from "../abilities.js";

const goldenGirlsDeck = {
  name: "Golden Girls Deck",
  cards: [
    {
      id: 19,
      name: "Cheesecake",
      cost: 1,
      power: 1,
      img: "/cardImages/goldengirls/cheesecake.jpg",
      ability: ['drawCards', 1],
      description: "Draw an extra card on your next turn.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 20,
      name: "Stan",
      cost: 2,
      power: 3,
      img: "/cardImages/goldengirls/stan_zbornak.jpg",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 21,
      name: "Rose",
      cost: 3,
      power: 7,
      img: "/cardImages/goldengirls/rose_nylund.jpg",
      ability: ["addPower", 1],
      description: "Give all friendly cards in this location +1 power.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 22,
      name: "Blanche",
      cost: 4,
      power: 10,
      img: "/cardImages/goldengirls/blanche_devereaux.jpg",
      ability: ['playCardFromDeck', 1],
      description: "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 23,
      name: "Dorothy",
      cost: 5,
      power: 1,
      img: "/cardImages/goldengirls/dorothy_zbornak.jpg",
      ability: ['shuffleHandIntoDeck', 3],
      description: "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 24,
      name: "Sophia",
      cost: 6,
      power: 1,
      img: "/cardImages/goldengirls/sophia_petrillo.jpg",
      ability: ['playCardFromDeck', 1],
      description: "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
  ],
};

export default goldenGirlsDeck;
