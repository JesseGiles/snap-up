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
      description: abilities.drawCards.description,
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 20,
      name: "Stan",
      cost: 1,
      power: 1,
      img: "/cardImages/goldengirls/stan_zbornak.jpg",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 21,
      name: "Rose",
      cost: 1,
      power: 1,
      img: "/cardImages/goldengirls/rose_nylund.jpg",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 22,
      name: "Blanche",
      cost: 1,
      power: 1,
      img: "/cardImages/goldengirls/blanche_devereaux.jpg",
      ability: ['playCardFromDeck', 1],
      description: "Play 1 card from your deck into this lane",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
    {
      id: 23,
      name: "Dorothy",
      cost: 1,
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
      cost: 1,
      power: 1,
      img: "/cardImages/goldengirls/sophia_petrillo.jpg",
      ability: ['shuffleHandIntoDeck', 3],
      description: "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "goldengirls",
      locationBonus: false,

    },
  ],
};

export default goldenGirlsDeck;
