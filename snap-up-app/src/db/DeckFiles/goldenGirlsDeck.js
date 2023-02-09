const abilities = require("../abilities");

const goldenGirlsDeck = {
  name: "Golden Girls Deck",
  cards: [
    {
      id: 19,
      name: "Cheesecake",
      cost: 1,
      power: 0,
      img: "/cardImages/goldengirls/cheesecake.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
    {
      id: 20,
      name: "Stan",
      cost: 2,
      power: 4,
      img: "/cardImages/goldengirls/stan_zbornak.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
    {
      id: 21,
      name: "Rose",
      cost: 3,
      power: 6,
      img: "/cardImages/goldengirls/rose_nylund.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
    {
      id: 22,
      name: "Blanche",
      cost: 4,
      power: 8,
      img: "/cardImages/goldengirls/blanche_devereaux.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
    {
      id: 23,
      name: "Dorothy",
      cost: 5,
      power: 10,
      img: "/cardImages/goldengirls/dorothy_zbornak.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
    {
      id: 24,
      name: "Sophia",
      cost: 6,
      power: 12,
      img: "/cardImages/goldengirls/sophia_petrillo.jpg",
      ability: abilities[0],
      cardPosition: "hand",
      deck: "goldengirls",
    },
  ],
};

module.exports = { goldenGirlsDeck };
